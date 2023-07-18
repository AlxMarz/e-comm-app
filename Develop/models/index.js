// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Category.hasMany(product,{
  foreignKey: "category_id",
  onDelete: "CASCADE",
})

// Categories have many Products
Product.belongsTo(Category,{
  foreignKey: "category_id",
})

// Products belongToMany Tags (through ProductTag)
product.belongsToMAny(tag, { through: ProductTag})

// Tags belongToMany Products (through ProductTag)
tag.belongsToMAny(product, { through: ProductTag})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
