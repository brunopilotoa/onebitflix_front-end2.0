import useSWR from "swr";
import styles from "../../../../styles/slideCategory.module.scss"
import categoriesService, { CategoryType } from "@/services/categoryService";
import ListCategoriesSlide from "../listCategorySlide";

const ListCategories = function (){
    const {data,error} = useSWR("/listCategories",categoriesService.getCategories);
    if (error) return error;
    if(!data)
    return(
        <>
        <p> Loading ...</p>
        </>
    );
    return (
        <>
            {data.data.categories?.map((category:CategoryType)=>(
                <ListCategoriesSlide
                key={category.id}
      categoryId={category.id}
      categoryName={category.name}
      />
            )
            )}
        </>
    )
}
export default ListCategories