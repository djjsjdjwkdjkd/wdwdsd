// src/utils/aiService.js
import axios from 'axios';

// 火山引擎 API 相关配置
const API_URL = 'https://open.volcengineapi.com';
const API_KEY = 'your-api-key';
const SECRET_KEY = 'your-secret-key';

export const getAIChatResponse = async (question) => {
  try {
    const response = await axios.post(API_URL, {
      question,
      // 其他请求参数根据火山引擎 API 文档进行配置
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
        'X-Secret-Key': SECRET_KEY
      }
    });
    return response.data.answer;
  } catch (error) {
    console.error('AI 客服请求出错:', error);
    return '抱歉，暂时无法获取答案，请稍后再试。';
  }
};