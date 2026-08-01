class Solution {
    dfs(image, sr, sc, original, color) {
        if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length) return;

        if (image[sr][sc] !== original) return;

        image[sr][sc] = color;

        this.dfs(image, sr + 1, sc, original, color);
        this.dfs(image, sr - 1, sc, original, color);
        this.dfs(image, sr, sc + 1, original, color);
        this.dfs(image, sr, sc - 1, original, color);
    }
    floodFill = function (image, sr, sc, color) {
        let original = image[sr][sc];
        if (original === color) return image;

        this.dfs(image, sr, sc, original, color);
        return image;
    };
}
