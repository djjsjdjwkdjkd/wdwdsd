<template>
    <div class="customer-service-wrap">
      <!-- 客服页面标题 -->
      <div class="service-title-wrap">
        <div class="service-inner">
          <div class="inner-left">
            <img src="@/assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner-center">
            <div class="service-title">客服中心</div>
          </div>
          <div class="inner-right">
            <img src="@/assets/img/tupianleft.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 聊天窗口 -->
      <div class="chat-window">
        <div class="chat-messages">
          <!-- 模拟客服和用户消息 -->
          <div
            :class="['message', message.isUser ? 'user' : 'customer']"
            v-for="(message, index) in messages"
            :key="index"
          >
            <div v-if="!message.isUser" class="message-avatar">
              <img src="@/assets/img/cuservice.png" alt="客服头像" />
            </div>
            <div class="message-content-wrap">
              <div class="message-content">
                {{ message.text }}
              </div>
              <div class="message-time">
                {{ message.time }}
              </div>
            </div>
          </div>
        </div>
        <div class="chat-input">
          <el-input
            v-model="inputMessage"
            placeholder="请输入您的问题"
            @keyup.enter="sendMessage"
          ></el-input>
          <el-button @click="sendMessage">发送</el-button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        messages: [
          {
            text: "您好，有什么可以帮助您的？",
            time: "2024/07/01 10:00",
            isUser: false
          }
        ],
        inputMessage: ""
      };
    },
    methods: {
      sendMessage() {
        if (this.inputMessage.trim() !== "") {
          const newMessage = {
            text: this.inputMessage,
            time: new Date().toLocaleString(),
            isUser: true
          };
          this.messages.push(newMessage);
          this.inputMessage = "";
        }
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .customer-service-wrap {
    width: 100%;
    padding-top: 50px;
  
    .service-title-wrap {
      width: 100%;
      margin-top: 50px;
      @media screen and (max-width: 768px) {
        margin-top: 30px;
      }
      .service-inner {
        display: flex;
        justify-content: center;
        .inner-left {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          @media screen and (max-width: 768px) {
            flex: 1;
          }
          img {
            width: 30%;
          }
        }
        .inner-center {
          width: 450px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0 50px;
          @media screen and (max-width: 768px) {
            flex: 3;
          }
          .service-title {
            font-size: 40px;
            font-weight: bold;
            @media screen and (max-width: 768px) {
              font-size: 1rem;
            }
          }
        }
        .inner-right {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          @media screen and (max-width: 768px) {
            flex: 1;
          }
          img {
            width: 30%;
          }
        }
      }
    }
  
    .chat-window {
      width: 70%;
      margin: 50px auto;
      border: 1px solid #e5e5e5;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      @media screen and (max-width: 768px) {
        width: 95%;
      }
  
      .chat-messages {
        height: 400px;
        overflow-y: auto;
        padding: 20px;
        border-bottom: 1px solid #e5e5e5;
  
        .message {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
  
          .message-avatar {
            width: 40px;
            height: 40px;
            margin-right: 10px;
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              object-fit: cover;
            }
          }
  
          .message-content-wrap {
            flex: 1;
  
            .message-content {
              padding: 10px;
              border-radius: 5px;
              display: inline-block;
            }
  
            .message-time {
              font-size: 12px;
              color: #999;
              margin-top: 5px;
            }
          }
        }
  
        .customer .message-content {
          background-color: #f5f5f5;
        }
  
        .user {
          flex-direction: row-reverse;
  
          .message-content-wrap {
            text-align: right;
          }
  
          .message-content {
            background-color: #dcf8c6;
          }
        }
      }
  
      .chat-input {
        display: flex;
        padding: 20px;
  
        .el-input {
          flex: 1;
          margin-right: 10px;
        }
      }
    }
  }
  </style>