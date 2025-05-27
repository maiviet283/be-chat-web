require('dotenv').config()
const cors = require('cors');
const express = require('express')
const connectDB = require('./src/configs/database');
const configViewEngine = require('./src/configs/viewEngine')
const http = require('http')
const socketIO = require('socket.io')

const homeRoutes = require('./src/routes/home.route')
const customerRoutes = require('./src/routes/customer.route')

const app = express()
const server = http.createServer(app)
const io = socketIO(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

// config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT
const host_name = process.env.HOST_NAME

// config template engine and static files
configViewEngine(app)

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use('/media/customers', express.static('src/media/customers'));

app.use('/', homeRoutes)
app.use('/api/customers', customerRoutes)


// ==================== Socket.IO ====================

io.on('connection', (socket) => {
    console.log(`🔌 Người dùng kết nối: ${socket.id}`);

    socket.on('join', (userId) => {
        socket.join(userId);
        console.log(`User ${userId} đã vào phòng riêng`);
    });

    socket.on('sendMessage', ({ conversationId, senderId, receiverIds, message }) => {
        receiverIds.forEach(id => {
            io.to(id).emit('receiveMessage', {
                conversationId,
                senderId,
                message
            });
        });
    });

    socket.on('disconnect', () => {
        console.log(`❌ Người dùng ngắt kết nối: ${socket.id}`);
    });
});

connectDB().then(() => {
    server.listen(port, host_name, () => {
        console.log(`🚀 Server chạy tại: http://${host_name}:${port}`);
    });
});