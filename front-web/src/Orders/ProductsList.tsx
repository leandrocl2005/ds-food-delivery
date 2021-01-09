import { checkIsSelected } from './Helpers';
import ProductCard from './ProductCard';
import './styles.css';
import { Product } from './types';

type Props = {
    products: Product[];
    onSelectProduct: (product: Product) => void;
    selectedProducts: Product[];
}

function ProductsList({ products, onSelectProduct, selectedProducts }: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onSelectProduct={onSelectProduct}
                        isSelected={checkIsSelected(selectedProducts, product)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsList;