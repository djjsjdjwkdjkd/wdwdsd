<template>
  <div class="demo_wrap">
    <!-- 桌面端表单 -->
    <div class="demo_form_desktop hidden-sm-and-down">
      <Form :model="formTop" label-position="top" class="demo_form_item1">
        <FormItem label="想领养的宠物类型" class="form_item1" required>
          <el-select v-model="formTop.service" placeholder="请选择活动区域">
            <el-option :label="item.label" :value="item.value" v-for="(item,index) in selectData" :key="index"></el-option>
          </el-select>
        </FormItem>
        <FormItem label="姓名" class="form_item1" required>
          <Input
            v-model="formTop.input"
            placeholder="请输入您的姓名"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="手机号" class="form_item2" required>
          <Input
            v-model="formTop.phone"
            placeholder="请输入您的手机号"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="验证码" style="width: 22%" class="form_item2" required>
          <Input
            v-model="formTop.code"
            placeholder="请输入您的验证码"
            search
            :enter-button="countdown > 0 ? `${countdown}s后重试` : '获取验证码'"
            :disabled="countdown > 0"
            @on-search="sendVerificationCode"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="邮箱" style="width: 46%" class="form_item2" required>
          <Input
            v-model="formTop.email"
            placeholder="请输入您的邮箱"
            size="large"
          ></Input>
        </FormItem>
      </Form>
      <Form
        :model="formTop3"
        label-position="top"
        inline
        class="demo_form_item2"
      >
        <FormItem
          label="地址"
          style="width: 46%"
          class="form_item3"
          required
        >
          <Input
            v-model="formTop3.gongsi"
            placeholder="请输入您的地址"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="其他请填在这里（选填）" style="width: 46%" class="form_item3">
          <Input
            v-model="formTop3.zhiwu"
            placeholder="请输入您想领养的宠物类型"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="备注" style="width: 92%" class="form_item3">
          <Input
            v-model="formTop3.beizhu"
            placeholder="您可以在这儿描述问题和需求,不超过200字"
            type="textarea"
            :rows="5"
            maxlength="200"
          ></Input>
        </FormItem>
      </Form>
      <div class="form_bottom">
        <el-checkbox v-model="accept" label="1">点击提交视为您已阅读并同意哈基米宠物《隐私政策》</el-checkbox>
        <el-button class="btn" @click="submitForm">点击预约</el-button>
      </div>
    </div>
    <!-- 移动端表单 -->
    <div class="demo_form_mobile hidden-sm-and-up">
      <Form :model="formTopMobile" label-position="top" class="demo_form_item1">
        <FormItem label="想领养的宠物类型" class="form_item1" required>
          <el-select v-model="formTopMobile.service" placeholder="请选择活动区域">
            <el-option :label="item.label" :value="item.value" v-for="(item,index) in selectData" :key="index"></el-option>
          </el-select>
        </FormItem>
        <FormItem label="姓名" class="form_item1" required>
          <Input
            v-model="formTopMobile.input"
            placeholder="请输入您的姓名"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="手机号" class="form_item2" required>
          <Input
            v-model="formTopMobile.phone"
            placeholder="请输入您的手机号"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="验证码" class="form_item2" required>
          <Input
            v-model="formTopMobile.code"
            placeholder="请输入您的验证码"
            search
            :enter-button="countdown > 0 ? `${countdown}s后重试` : '获取验证码'"
            :disabled="countdown > 0"
            @on-search="sendVerificationCode"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="邮箱" class="form_item2" required>
          <Input
            v-model="formTopMobile.email"
            placeholder="请输入您的邮箱"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="验证码" class="form_item2" required>
          <Input
            v-model="formTopMobile.code"
            placeholder="请输入您的验证码"
            search
            :enter-button="countdown > 0 ? `${countdown}s后重试` : '获取验证码'"
            :disabled="countdown > 0"
            @on-search="sendVerificationCode"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="政府/园区/机构/企业名称" class="form_item3" required>
          <Input
            v-model="formTopMobile.gongsi"
            placeholder="请输入您的地址"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="其他请填在这里（选填）" class="form_item3">
          <Input
            v-model="formTopMobile.zhiwu"
            placeholder="请输入您想领养的宠物类型"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="备注" class="form_item3">
          <Input
            v-model="formTopMobile.beizhu"
            placeholder="您可以在这儿描述问题和需求,不超过200字"
            type="textarea"
            :rows="15"
            maxlength="200"
          ></Input>
        </FormItem>
      </Form>
      <div class="form_bottom">
        <div class="bottom_top">
          <input type="checkbox" id="checkmy" v-model="accept" />
          <label for="checkmy" style="font-size: 12px;padding-left:8px;">点击提交视为您已阅读并同意哈基米宠物《隐私政策》</label>
        </div>
        <el-button class="btn" @click="submitForm">点击预约</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/utils/http';

export default {
  data() {
    return {
      formTop: {
        input: '',
        service: '',
        phone: '',
        code: '',
        email: ''
      },
      formTop3: {
        gongsi: '',
        zhiwu: '',
        beizhu: ''
      },
      formTopMobile: {
        input: '',
        service: [],
        phone: '',
        code: '',
        email: '',
        gongsi: '',
        zhiwu: '',
        beizhu: ''
      },
      accept: '1',
      selectData: [
        {
          value: '猫',
          label: '猫'
        },
        {
          value: '狗',
          label: '狗'
        },
        {
          value: '其他',
          label: '其他'
        }
      ],
      countdown: 0
    };
  },
  methods: {
    sendVerificationCode() {
      const phone = this.formTop.phone || this.formTopMobile.phone;
      if (!phone) {
        this.$message.error('请输入手机号码');
        return;
      }
      http.post('/api/sendCode', { phone })
        .then(response => {
          if (response.data.code === 200) {
            this.$message.success('验证码发送成功');
            this.startCountdown();
          } else {
            this.$message.error(response.data.message);
          }
        })
        .catch(error => {
          console.error('发送验证码失败:', error);
          this.$message.error('发送验证码失败，请稍后重试');
        });
    },
    startCountdown() {
      this.countdown = 60;
      const intervalId = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(intervalId);
        }
      }, 1000);
    },
    submitForm() {
      const formData = {
        ...this.formTop,
        ...this.formTop3,
        ...this.formTopMobile
      };
      if (!this.accept) {
        this.$message.error('请同意《隐私政策》');
        return;
      }
      http.post('/api/submitForm', formData)
        .then(response => {
          if (response.data.code === 200) {
            this.$message.success('提交成功，我们将尽快处理您的申请');
            // 清空表单
            this.formTop = {
              input: '',
              service: '',
              phone: '',
              code: '',
              email: ''
            };
            this.formTop3 = {
              gongsi: '',
              zhiwu: '',
              beizhu: ''
            };
            this.formTopMobile = {
              input: '',
              service: [],
              phone: '',
              code: '',
              email: '',
              gongsi: '',
              zhiwu: '',
              beizhu: ''
            };
            this.accept = '1';
          } else {
            this.$message.error(response.data.message);
          }
        })
        .catch(error => {
          console.error('提交表单失败:', error);
          this.$message.error('提交表单失败，请稍后重试');
        });
    }
  }
};
</script>

<style lang="scss">
.demo_wrap {
  padding-top: 150px;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  .demo_title_wrap {
    text-align: center;
    @media screen and (max-width: 768px) {
      text-align: left;
    }
    h1 {
      font-size: 32px;
      @media screen and (max-width: 768px) {
        font-size: 24px;
      }
    }
  }
}
</style>