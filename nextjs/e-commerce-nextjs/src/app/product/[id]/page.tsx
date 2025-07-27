
import ProductComponent from "@/components/product/product-detail";

interface ProductPageProps {
  params: { id: string };
}
export default async function ProductPage({params}: ProductPageProps) {
  const paramsData = await params;
  const productId = paramsData.id;

  return (
    <ProductComponent productId={productId}/>
  );
}
