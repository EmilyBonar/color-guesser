interface Color {
	name: String;
	rgb: RGB;
}

interface RGB {
	r: number;
	g: number;
	b: number;
}

let colors: Color[] = [
	{ name: "Black", rgb: { r: 0, g: 0, b: 0 } },
	{ name: "Navy", rgb: { r: 0, g: 0, b: 128 } },
	{ name: "Dark Blue", rgb: { r: 0, g: 0, b: 139 } },
	{ name: "Medium Blue", rgb: { r: 0, g: 0, b: 205 } },
	{ name: "Blue", rgb: { r: 0, g: 0, b: 255 } },
	{ name: "Dark Green", rgb: { r: 0, g: 100, b: 0 } },
	{ name: "Green", rgb: { r: 0, g: 128, b: 0 } },
	{ name: "Teal", rgb: { r: 0, g: 128, b: 128 } },
	{ name: "Dark Cyan", rgb: { r: 0, g: 139, b: 139 } },
	{ name: "Deep Sky Blue", rgb: { r: 0, g: 191, b: 255 } },
	{ name: "Dark Turquoise", rgb: { r: 0, g: 206, b: 209 } },
	{ name: "Medium Spring Green", rgb: { r: 0, g: 205, b: 154 } },
	{ name: "Lime", rgb: { r: 0, g: 255, b: 0 } },
	{ name: "Spring Green", rgb: { r: 0, g: 255, b: 127 } },
	{ name: "Cyan", rgb: { r: 0, g: 255, b: 255 } },
	{ name: "Midnight Blue", rgb: { r: 25, g: 25, b: 112 } },
	{ name: "Dodger Blue", rgb: { r: 30, g: 144, b: 255 } },
	{ name: "Light Sea Green", rgb: { r: 32, g: 178, b: 170 } },
	{ name: "Forest Green", rgb: { r: 34, g: 139, b: 34 } },
	{ name: "Sea Green", rgb: { r: 46, g: 139, b: 87 } },
	{ name: "Dark Slate Gray", rgb: { r: 47, g: 79, b: 79 } },
	{ name: "Lime Green", rgb: { r: 50, g: 205, b: 50 } },
	{ name: "Medium Sea Green", rgb: { r: 60, g: 179, b: 113 } },
	{ name: "Turquoise", rgb: { r: 64, g: 224, b: 208 } },
	{ name: "Royal Blue", rgb: { r: 65, g: 105, b: 225 } },
	{ name: "Steel Blue", rgb: { r: 70, g: 130, b: 180 } },
	{ name: "Dark Slate Blue", rgb: { r: 72, g: 61, b: 139 } },
	{ name: "Medium Turquoise", rgb: { r: 72, g: 209, b: 204 } },
	{ name: "Indigo", rgb: { r: 75, g: 0, b: 130 } },
	{ name: "Dark Olive Green", rgb: { r: 85, g: 107, b: 47 } },
	{ name: "Cadet Blue", rgb: { r: 95, g: 158, b: 160 } },
	{ name: "Cornflower Blue", rgb: { r: 100, g: 149, b: 237 } },
	{ name: "Rebecca Purple", rgb: { r: 102, g: 51, b: 153 } },
	{ name: "Medium Aqua Marine", rgb: { r: 102, g: 205, b: 170 } },
	{ name: "Dim Gray", rgb: { r: 105, g: 105, b: 105 } },
	{ name: "Slate Blue", rgb: { r: 106, g: 90, b: 205 } },
	{ name: "Olive Drab", rgb: { r: 107, g: 142, b: 35 } },
	{ name: "Slate Gray", rgb: { r: 112, g: 128, b: 144 } },
	{ name: "Light Slate Gray", rgb: { r: 119, g: 136, b: 153 } },
	{ name: "Medium Slate Blue", rgb: { r: 123, g: 104, b: 238 } },
	{ name: "Lawn Green", rgb: { r: 124, g: 252, b: 0 } },
	{ name: "Chartreuse", rgb: { r: 127, g: 255, b: 0 } },
	{ name: "Aquamarine", rgb: { r: 127, g: 255, b: 212 } },
	{ name: "Maroon", rgb: { r: 128, g: 0, b: 0 } },
	{ name: "Purple", rgb: { r: 128, g: 0, b: 128 } },
	{ name: "Olive", rgb: { r: 128, g: 128, b: 0 } },
	{ name: "Gray", rgb: { r: 128, g: 128, b: 128 } },
	{ name: "Sky Blue", rgb: { r: 135, g: 206, b: 235 } },
	{ name: "Light Sky Blue", rgb: { r: 135, g: 206, b: 250 } },
	{ name: "Blue Violet", rgb: { r: 138, g: 43, b: 226 } },
	{ name: "Dark Red", rgb: { r: 139, g: 0, b: 0 } },
	{ name: "Dark Magenta", rgb: { r: 139, g: 0, b: 139 } },
	{ name: "Saddle Brown", rgb: { r: 139, g: 69, b: 19 } },
	{ name: "Dark Sea Green", rgb: { r: 143, g: 188, b: 143 } },
	{ name: "Light Green", rgb: { r: 144, g: 238, b: 144 } },
	{ name: "Medium Purple", rgb: { r: 147, g: 112, b: 219 } },
	{ name: "Dark Violet", rgb: { r: 148, g: 0, b: 211 } },
	{ name: "Pale Green", rgb: { r: 152, g: 251, b: 152 } },
	{ name: "Dark Orchid", rgb: { r: 153, g: 50, b: 204 } },
	{ name: "Yellow Green", rgb: { r: 154, g: 205, b: 50 } },
	{ name: "Sienna", rgb: { r: 160, g: 82, b: 45 } },
	{ name: "Brown", rgb: { r: 165, g: 42, b: 42 } },
	{ name: "Dark Gray", rgb: { r: 169, g: 169, b: 169 } },
	{ name: "Light Blue", rgb: { r: 173, g: 216, b: 230 } },
	{ name: "Green Yellow", rgb: { r: 173, g: 255, b: 47 } },
	{ name: "Pale Turquoise", rgb: { r: 175, g: 238, b: 238 } },
	{ name: "Light Steel Blue", rgb: { r: 173, g: 255, b: 47 } },
	{ name: "Powder Blue", rgb: { r: 176, g: 224, b: 230 } },
	{ name: "Fire Brick", rgb: { r: 178, g: 34, b: 34 } },
	{ name: "Dark Golden Rod", rgb: { r: 184, g: 134, b: 11 } },
	{ name: "MediumOrchid", rgb: { r: 186, g: 85, b: 211 } },
	{ name: "Rosy Brown", rgb: { r: 188, g: 143, b: 143 } },
	{ name: "Dark Khaki", rgb: { r: 189, g: 183, b: 107 } },
	{ name: "Silver", rgb: { r: 192, g: 192, b: 192 } },
	{ name: "Medium Violet Red", rgb: { r: 199, g: 21, b: 133 } },
	{ name: "Indian Red", rgb: { r: 205, g: 92, b: 92 } },
	{ name: "Peru", rgb: { r: 205, g: 133, b: 63 } },
	{ name: "Chocolate", rgb: { r: 210, g: 105, b: 30 } },
	{ name: "Tan", rgb: { r: 210, g: 180, b: 140 } },
	{ name: "Light Gray", rgb: { r: 211, g: 211, b: 211 } },
	{ name: "Thistle", rgb: { r: 216, g: 191, b: 216 } },
	{ name: "Orchid", rgb: { r: 218, g: 112, b: 214 } },
	{ name: "Golden Rod", rgb: { r: 218, g: 165, b: 32 } },
	{ name: "Pale Violet Red", rgb: { r: 219, g: 112, b: 147 } },
	{ name: "Crimson", rgb: { r: 220, g: 20, b: 60 } },
	{ name: "Gainsboro", rgb: { r: 220, g: 220, b: 220 } },
	{ name: "Plum", rgb: { r: 221, g: 160, b: 221 } },
	{ name: "Burly Wood", rgb: { r: 222, g: 184, b: 135 } },
	{ name: "Light Cyan", rgb: { r: 224, g: 255, b: 255 } },
	{ name: "Lavender", rgb: { r: 230, g: 230, b: 250 } },
	{ name: "Dark Salmon", rgb: { r: 233, g: 150, b: 122 } },
	{ name: "Violet", rgb: { r: 238, g: 130, b: 238 } },
	{ name: "Pale Golden Rod", rgb: { r: 233, g: 232, b: 170 } },
	{ name: "Light Coral", rgb: { r: 240, g: 128, b: 128 } },
	{ name: "Khaki", rgb: { r: 240, g: 230, b: 140 } },
	{ name: "Alice Blue", rgb: { r: 240, g: 248, b: 255 } },
	{ name: "Honey Dew", rgb: { r: 240, g: 255, b: 240 } },
	{ name: "Azure", rgb: { r: 240, g: 255, b: 255 } },
	{ name: "Sandy Brown", rgb: { r: 244, g: 164, b: 96 } },
	{ name: "Wheat", rgb: { r: 245, g: 222, b: 179 } },
	{ name: "Beige", rgb: { r: 245, g: 245, b: 220 } },
	{ name: "White Smoke", rgb: { r: 245, g: 245, b: 245 } },
	{ name: "Mint Cream", rgb: { r: 245, g: 255, b: 250 } },
	{ name: "Ghost White", rgb: { r: 248, g: 248, b: 255 } },
	{ name: "Salmon", rgb: { r: 250, g: 128, b: 114 } },
	{ name: "Antique White", rgb: { r: 250, g: 235, b: 215 } },
	{ name: "Linen", rgb: { r: 250, g: 240, b: 230 } },
	{ name: "Light Golden Rod Yellow", rgb: { r: 250, g: 250, b: 210 } },
	{ name: "Old Lace", rgb: { r: 2253, g: 245, b: 230 } },
	{ name: "Red", rgb: { r: 255, g: 0, b: 0 } },
	{ name: "Magenta", rgb: { r: 255, g: 0, b: 255 } },
	{ name: "Deep Pink", rgb: { r: 255, g: 20, b: 147 } },
	{ name: "Orange Red", rgb: { r: 255, g: 69, b: 0 } },
	{ name: "Tomato", rgb: { r: 255, g: 99, b: 71 } },
	{ name: "Hot Pink", rgb: { r: 255, g: 105, b: 180 } },
	{ name: "Coral", rgb: { r: 255, g: 127, b: 80 } },
	{ name: "Dark Orange", rgb: { r: 255, g: 140, b: 0 } },
	{ name: "Light Salmon", rgb: { r: 255, g: 160, b: 122 } },
	{ name: "Orange", rgb: { r: 255, g: 165, b: 0 } },
	{ name: "Light Pink", rgb: { r: 255, g: 182, b: 193 } },
	{ name: "Pink", rgb: { r: 255, g: 192, b: 203 } },
	{ name: "Gold", rgb: { r: 255, g: 215, b: 0 } },
	{ name: "Peach Puff", rgb: { r: 255, g: 218, b: 185 } },
	{ name: "Navajo White", rgb: { r: 255, g: 222, b: 173 } },
	{ name: "Moccasin", rgb: { r: 255, g: 228, b: 181 } },
	{ name: "Bisque", rgb: { r: 255, g: 228, b: 196 } },
	{ name: "Misty Rose", rgb: { r: 255, g: 228, b: 225 } },
	{ name: "Blanched Almond", rgb: { r: 255, g: 235, b: 205 } },
	{ name: "Papaya Whip", rgb: { r: 255, g: 239, b: 213 } },
	{ name: "Lavender Blush", rgb: { r: 255, g: 240, b: 245 } },
	{ name: "Sea Shell", rgb: { r: 255, g: 245, b: 238 } },
	{ name: "Cornsilk", rgb: { r: 255, g: 248, b: 220 } },
	{ name: "Lemon Chiffon", rgb: { r: 255, g: 250, b: 205 } },
	{ name: "Floral White", rgb: { r: 255, g: 250, b: 240 } },
	{ name: "Snow", rgb: { r: 255, g: 250, b: 250 } },
	{ name: "Yellow", rgb: { r: 255, g: 255, b: 0 } },
	{ name: "Light Yellow", rgb: { r: 255, g: 255, b: 224 } },
	{ name: "Ivory", rgb: { r: 255, g: 255, b: 240 } },
	{ name: "White", rgb: { r: 255, g: 255, b: 255 } },
];

export default colors;
