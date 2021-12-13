import Product from "./Products";
import Categories from "./Categories";
import Measures from "./Measures";


const Querys = {
  
  allProducts: Product.UseProducts,
  productById: Product.FindProduct,
  


  allCategories:Categories.useCategories,
  allMeasures:Measures.useMeasures,
}


export default Querys;