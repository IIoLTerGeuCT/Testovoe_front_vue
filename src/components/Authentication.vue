<template>
  <div class="wrapper">
    <div class="container">
      <div class="container__controls">
        <div v-if="authError" class="container__error-auth">
          <h5>Не верно введены логин/пароль</h5>
        </div>
        <div class="container__input">
          <input
            type="text"
            v-model="login"
            class="container__input-login error__auth"
            placeholder="login, tel"
            @keypress.enter="checkAuth"
          />
          <input
            type="text"
            v-model="password"
            class="container__input-password"
            placeholder="password"
            @keypress.enter="checkAuth"
          />
        </div>
        <div class="container__btn">
          <button class="container__btn-login" @click="checkAuth">Вход</button>
          <button class="container__btn-cancel" @click="cancelAuth">
            Отмена
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      authError: false,
      getUrl: "http://localhost:3001/api/users",
    };
  },
  methods: {
    cancelAuth() {
      this.login = "";
      this.password = "";
      this.authError = false;
    },
    async checkAuth() {
      // Проверим на пустоту
      if (this.login !== "" && this.password !== "") {
        // сформируем запрос на сервер и отправим с параметром
        const response = await fetch(
          this.getUrl + `?login=${this.login}&&password=${this.password}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json; charset=utf-8" },
          }
        );
        // Распарсим результат/ответ от сервера
        const res = await response.json();
        // Проверяем по состоянию
        if (res.status === 200) {
          this.$router.push("/images");
        } else {
          // уведомляем о не правильной авторизации
          this.authError = true;
        }
      }
    },
  },
};
</script>
<style lang="scss">
.wrapper {
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px grey;
  text-align: center;
  width: 250px;
  margin: 100px auto;
}
.container__controls {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.container__error-auth {
  color: #ef476f;
  margin: 0;
  padding: 0;
  height: 40px;
}
.container__input {
  display: flex;
  flex-direction: column;
  .container__input-login {
    height: 25px;
    text-align: center;
    border: 1px solid lightgray;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .container__input-password {
    text-align: center;
    height: 25px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }
}
.container__btn {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  .container__btn-login {
    margin-right: 10px;
    width: 100px;
    background-color: #06d6a0;
    color: #fff;
    border: none;
    height: 25px;
    border-radius: 5px;
  }
  .container__btn-cancel {
    width: 100px;
    background-color: #ef476f;
    color: #fff;
    border: none;
    border-radius: 5px;
  }
}
</style>
