<template>
    <div class="container">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="charactor-card" data-bs-toggle="tab" data-bs-target="#charactor-card" type="button"
                    role="tab" aria-controls="charactor-card" aria-selected="true">角色卡列表</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="create-card" data-bs-toggle="tab" data-bs-target="#create-card" type="button"
                    role="tab" aria-controls="create-card" aria-selected="false">新增角色卡</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="charactor-card" role="tabpanel" aria-labelledby="charactor-card">...</div>
            <div class="tab-pane fade" id="create-card" role="tabpanel" aria-labelledby="create-card">...</div>
        </div>
    </div>
</template>
