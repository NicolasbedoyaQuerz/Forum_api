const Users = require('./users.model');
const Roles = require('./roles.model');
const Answers = require('./answers.model');
const Posts = require('./posts.model');
const Categories = require('./categories.model');


const initModels = () => {
    Users.belongsTo(Roles, {foreignKey: 'rolId'});
    Roles.hasMany(Users, {foreignKey: 'rolId'});

    Answers.belongsTo(Users, { foreignKey: 'userId'});
    Users.hasMany(Answers, {foreignKey: 'userId'});

    Answers.belongsTo(Posts, {foreignKey: 'postId'});
    Posts.hasMany(Answers, {foreignKey: 'postId'});

    Posts.belongsTo(Users, {foreignKey: 'userId'});
    Users.hasMany(Posts, {foreignKey: 'userId'});

    Posts.belongsTo(Categories, {foreignKey: 'categoryId'});
    Categories.hasMany(Posts, {foreignKey: 'categoryId'});

};

module.exports = initModels;