import { Component } from '@angular/core';
import { IProduct } from 'src/app/shared/products/product.interface';
import { productMock } from 'src/app/shared/products/product.mock';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	public product: IProduct = productMock;
	public selectedProductId: string = '';

	buyProduct(event: Event) {
		event.stopPropagation();
	}
}
