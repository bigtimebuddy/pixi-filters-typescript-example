const app = new PIXI.Application();
document.body.appendChild(app.view);

const shape = new PIXI.Graphics();
shape.beginFill(0x0099ff);
shape.drawCircle(0, 0, 100);
shape.position.set(app.view.width / 2, app.view.height / 2);

const filter = new PIXI.filters.GlowFilter({
    color: 0x00ccff,
    innerStrength: 0,
    outerStrength: 1,
    distance: 40,
});

shape.filters = [filter];

app.stage.addChild(shape);