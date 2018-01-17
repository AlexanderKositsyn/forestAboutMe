"use strict";

const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  crypto = require("crypto");

const User = new Schema(
  {
    login: { type: String, required: true, unique: true },
    hash: { type: String },
    salt: { type: String }
  },
  { collection: "User" }
);

// уставновить пароль
User.methods.setPassword = function(password) {
  // генерируем случайную соль для пароля и переводит в строку как в schema
  this.salt = crypto.randomBytes(16).toString("hex");
  // шифруем пароль и переводит в строку как в schema
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 512, "sha512")
    .toString("hex");
};

// проверить введенный пароль
User.methods.isCorrectPassword = function(password) {
  let hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
};

// просим moongose сохранить модель для ее дальнейшего использования
mongoose.model("user", User);
