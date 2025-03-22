<template>
    <div class="ai-customer-service">
      <div class="chat-window">
        <div class="messages" ref="messages">
          <div v-for="(message, index) in chatMessages" :key="index" :class="message.sender === 'user' ? 'user-message' : 'ai-message'">
            {{ message.content }}
          </div>
        </div>
        <div class="input-area">
          <input v-model="inputMessage" placeholder="请输入您的问题" @keyup.enter="sendMessage">
          <button @click="sendMessage">发送</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        inputMessage: '',
        chatMessages: [],
        // 智能客服 API 地址和密钥
        apiUrl: 'https://api.example.com/chat', 
        apiKey: 'your-api-key'
      };
    },
    methods: {
      sendMessage() {
        if (this.inputMessage.trim() === '') return;
  
        // 添加用户消息到聊天记录
        this.chatMessages.push({
          sender: 'user',
          content: this.inputMessage
        });
  
        // 发送请求到 AI 客服 API
        axios.post(this.apiUrl, {
          message: this.inputMessage
        }, {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`
          }
        })
        .then(response => {
          // 添加 AI 回复到聊天记录
          this.chatMessages.push({
            sender: 'ai',
            content: response.data.answer
          });
          // 滚动到聊天窗口底部
          this.$nextTick(() => {
            this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight;
          });
        })
        .catch(error => {
          console.error('请求 AI 客服失败:', error);
        });
  
        // 清空输入框
        this.inputMessage = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .ai-customer-service {
    width: 300px;
    height: 400px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #fff;
  }
  
  .chat-window {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .messages {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
  }
  
  .user-message {
    text-align: right;
    margin-bottom: 5px;
  }
  
  .ai-message {
    text-align: left;
    margin-bottom: 5px;
  }
  
  .input-area {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ccc;
  }
  
  .input-area input {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .input-area button {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  </style>