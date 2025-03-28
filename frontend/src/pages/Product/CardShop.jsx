const ProductSection = () => {
    const getProduct = async () => {
        const response = await axiosInstance("/api/product");
        return response.data;
    };

        const { data: ProductData = [] } = useQuery ({
            queryFn
        })
        return (
            <>
            <div className="bg-black h-1000">
                <h1 className="mt-20 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, sunt tempora distinctio corrupti reprehenderit perferendis. Quae iure doloribus blanditiis magnam, non quibusdam dicta unde veniam est itaque nobis dolor inventore?</h1>
            </div>
            </>
        )
}



export default ProductSection;