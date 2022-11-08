import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/products/product.interface';
import { productMock } from 'src/app/shared/products/product.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent {
	productObject: IProduct = productMock;

	showProductId(productId: string | undefined) {
		console.log(productId);
	}

	showProductRating(rating: number | undefined) {
		console.log(rating);
	}
}
