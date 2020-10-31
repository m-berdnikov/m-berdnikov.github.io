'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = '#ffffff';
var SHADOW_GAP = 10;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var FULL_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var barX = CLOUD_X + BAR_GAP;
var BAR_Y = 230;
var maxBarWidth = FULL_BAR_HEIGHT - BAR_GAP;
var USER_BAR_COLOR = 'rgba(255, 0, 0, 1)';

var TEXT_GAP = 5;
var TEXT_COLOR = '#000000';

var textX = CLOUD_X + (BAR_GAP >> 1);

function renderCloud(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

function getMaxElement(arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}

function getBlueColor() {
  return 'hsl(239, ' + Math.floor(Math.random() * 100) + '%, 50%)';
}

function getRandomBar(ctx, x, y) {
  ctx.fillRect(x, BAR_Y - y, BAR_WIDTH, y);
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', textX, CLOUD_Y + (BAR_GAP >> 1) + (TEXT_GAP << 1));
  ctx.fillText('Список результатов:', textX, CLOUD_Y + BAR_GAP + (TEXT_GAP << 1));

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    var elemenX = barX + (BAR_WIDTH + BAR_GAP) * i;
    var randomBarWidth = maxBarWidth * times[i] / maxTime;

    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(Math.floor(times [i]), elemenX, BAR_Y - TEXT_GAP * 2 - randomBarWidth);
    if (names [i] === 'Вы') {
      ctx.fillStyle = USER_BAR_COLOR;
    } else {
      ctx.fillStyle = getBlueColor();
    }
    getRandomBar(ctx, elemenX, randomBarWidth);
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(names [i], elemenX, BAR_Y + BAR_GAP / 2);
  }
};
