import db from "../db/index.js";

//使用es6的按需导出语法,将getAllUser方法导出出去
export async function getAllUser(req, res) {
    try {
        const [rows] = await db.query('select id,username,nickname from ev_users')
        res.send({ status: 0, message: "获取用户列表成功", data: rows })
    } catch (err) {
        res.send({
            status: 1,
            message: '获取用户列表失败',
            desc: err.message
        })
    }

}

getAllUser()