//1.使用ES6导入语法,导入jQuery
import $ from 'jquery'


//2.定义jQuery的入口函数
$(function () {
    //3.实现奇偶行的变色效果
    $('li:odd').css('background-color', 'blue')
    $('li:even').css('background-color', 'green')
})