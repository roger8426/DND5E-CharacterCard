<template>
    <div class="home">
        <div class="container h-100 d-flex flex-column justify-content-center">
            <img src="../assets/images/DND.png" alt="" class="w-100">
            <ul class="list-unstyled d-flex justify-content-evenly mt-5">
                <li><router-link to="/charactor" class="btn btn-outline-light btn-lg fw-bold">DND5E 角色卡</router-link></li>
                <li><button class="btn btn-outline-light btn-lg fw-bold">種族與職業</button></li>
                <li><button class="btn btn-outline-light btn-lg fw-bold">法術與物品</button></li>
                <li><button class="btn btn-outline-light btn-lg fw-bold">骰子機器人</button></li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
.home {
    height: 100vh;
    img {
        object-fit: contain;
    }
}
</style>