const express = require("express");
module.exports = {
    khoga: function(req, res) {
        res.render("khogalachanh");
    },
    khogalachanh: function(req, res) {
        res.render('khogalachanh');
    },

    khogabotoi: function(req, res) {
        res.render("khogabotoi");
    },
    khogacay: function(req, res) {
        res.render("khogacay")
    }
}