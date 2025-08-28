<template>
    <div class="contentWrap">
        <div class="title">로그인</div>
        <form v-on:submit.prevent="doLogin">
            <div class="formArea">
                <div class="row">
                    <div class="text">아이디</div>
                    <input type="text" name="name" placeholder="Username" v-model="form.name">
                </div>
                <div class="row">
                    <div class="text">비밀번호</div>
                    <input type="password" name="password" placeholder="Password" v-model="form.password">
                </div>
            </div>

            <div class="buttonArea">
                <button type="submit">로그인</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import qs from 'qs'; // querystring의 줄임말. 객체를 url인코딩된 문자열로 변환하거나 반대로 파싱해주는 라이브러리.
import router from '@/router';
import { useAuthStore } from '@/stores/authStore';


const form = ref({
    name: "",
    password: ""
});
const auth = useAuthStore();
function doLogin() {
    if (form.value.name == "") {
        alert("아이디를 입력하세요.");
        return false;
    }

    if (form.value.password == "") {
        alert("비밀번호를 입력하세요.");
        return false;
    }

    axios({
        method: 'post',
        url: 'http://livecrm-test.mdmarketing.co.kr:8000/users/hospitalsByAccount',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        data: qs.stringify({ loginId: form.value.name, passwd: form.value.password }),
    })
        .then((response) => {
            console.log(response);
            if (response.data.code == 200) { // 로그인 성공
                auth.setAuth({
                    token: response.data.token ?? 'session', // token이 없으면 session으로 임시처리
                    user: response.data.user
                });
                router.go(-1); // 로그인 전 페이지로 이동 =  보고있던페이지로 이동
            } else {
                alert(response.data.message);
            }
        }).catch(function (error) {
            console.log(error);
        });
}
</script>

<style scoped>
.contentWrap {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    padding: 150px 0;
    box-sizing: border-box;
}

.title {
    text-align: center;
    font-size: 28px;

}

.formArea {
    margin-top: 80px;
}

.formArea .row {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
}

.formArea .row .text {
    width: 80px;
    text-align: justify;
    margin-right: 10px;
}

.formArea .row:nth-last-child(1) {
    margin-bottom: 0;
}

.formArea .row input {
    flex: 1;
    height: 50px;
    padding: 0 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

.buttonArea {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}

.buttonArea button {
    width: 100%;
    background-color: #3470cc;
    border: none;
    color: #fff;
    font-size: 18px;
    padding: 15px 0;
    border-radius: 5px;
    cursor: pointer;
}
</style>