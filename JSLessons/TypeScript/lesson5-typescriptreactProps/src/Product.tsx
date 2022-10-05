type ProductTypeProps={
  productTypes:{
        title:string
        price:number
  }[]
}
const Product = (props:ProductTypeProps) => {
  return (
    <div>
        {props.productTypes.map((fd)=>{
            return(
                <div>
                    <p>{fd.title}</p>
                    <p>{fd.price}</p>
                </div>
            )
        })}
        
    </div>
  )
}

export default Product