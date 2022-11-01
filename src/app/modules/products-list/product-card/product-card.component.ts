import { Component, OnInit } from '@angular/core';
import { productMock } from 'src/app/shared/products/product.mock';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent implements OnInit {
	public product = productMock;
	public selectedProductId: string = '';

	ngOnInit(): void {}

	buyProduct(event: Event, id: string) {
		this.selectedProductId = id;
		console.log(id);
		event.stopPropagation();
	}
}
