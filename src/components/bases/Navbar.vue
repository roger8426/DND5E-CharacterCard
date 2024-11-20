<template>
    <div class="bg-secondary text-light" :class="{ 'fix-top': isTop }">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img src="../../assets/images/DND-removebg.png" alt="" class="w-100">
                </div>
                <div class="col-8">
                    <ul class="list-unstyled d-flex justify-content-evenly align-items-center py-3 mb-0 h-100">
                        <li>DND5E 角色卡</li>
                        <li>種族與職業</li>
                        <li>法術與物品</li>
                        <li>骰子機器人</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isTop: true,
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isTop = window.scrollY === 0
        },
    }
}
</script>