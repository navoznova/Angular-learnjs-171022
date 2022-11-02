import { Component, Input } from '@angular/core';
import { productMock } from 'src/app/shared/products/product.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent {
	productObject = productMock;

	showProductId(productId: string | undefined) {
		console.log(productId);
	}

	showProductRating(rating: number) {
		console.log(rating);
	}
}
