
import EditProductComponent from "@/components/product/edit-product";

interface ProductPageProps {
  params: { id: string };
}
export default async function EditProductPage({params}: ProductPageProps) {
  const paramsData = await params;
  const productId = paramsData.id;

  return (
    <EditProductComponent productId={productId}/>
  );
}
