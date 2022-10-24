<template>
    <div class="article-container">
        <!-- 文章的标题 -->
        <div class="header-box">
            <slot name="title">

            </slot>
        </div>
        <!-- 文章的内容 -->
        <div class="content-box">
            <slot name="content" msg="hello vue" mm="hall" :user="this.userinfo">

            </slot>
        </div>
        <!-- 文章的作者 -->
        <div class="footer-box">
            <slot name="footer">

            </slot>
        </div>
    </div>
</template>

<script>
export default {
    //首字母要大写
    name: 'Article',
    data() {
        return {
            //用户信息对象
            userinfo: {
                name: 'zs',
                age: 20
            }
        }
    }
}
</script>

<style lang="less" scoped>
.article-container {
    >div {
        min-height: 150px;
    }

    .header-box {
        background-color: PINK;
    }

    .content-box {
        background-color: lightblue;
    }

    .footer-box {
        background-color: lightsalmon;
    }
}
</style>