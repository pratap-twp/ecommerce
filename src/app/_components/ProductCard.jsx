import Link from "next/link"
import styles from "../../styles/product.module.css"

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <Link href={`/products/${product.id}`}><button>View</button></Link>
    </div>
  )
}
