namespace F {
	export class Functions {
		public static randomInt(from:number, to:number):number {
			let randomResult:number = Math.floor((Math.random() * to) + from);
			return randomResult;
		}
	}
}

// Главный файл с функциями