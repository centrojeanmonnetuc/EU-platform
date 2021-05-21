import{a as e}from"./vendor.daadd3da.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const i=new URL(e,location),h=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,a)=>{const o=new URL(e,i);if(self[t].moduleMap[o])return s(self[t].moduleMap[o]);const r=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){a(new Error(`Failed to import: ${e}`)),h(c)},onload(){s(self[t].moduleMap[o]),h(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");class t extends Phaser.Scene{constructor(){super({key:"BootScene"})}init(){const e=window.location.search,t=new URLSearchParams(e);this.gameId=t.get("id")}async preload(){this.load.script("webfont","https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js");const t="/api/games/game/"+this.gameId;await e.get(t).then((e=>{this.load.audio("select","assets/sounds/select.mp3"),this.load.audio("drop_piece","assets/sounds/drop.mp3"),this.load.audio("right_place","assets/sounds/right_place.mp3"),this.load.audio("complete_puzzle","assets/sounds/complete.mp3"),this.load.image("star","assets/images/star.png"),console.log(e.data);const t=e.data.config;this.timeToComplete=t.time_to_complete,this.piecesSize=t.pieces_size;const s=e.data.assets.images.final_img;this.puzzleImage=s,this.load.on("complete",(()=>this.createCustom())),this.load.image(s.id,""+s.path+s.server_path),this.load.start()})).catch((function(e){console.log(e)}))}createCustom(){this.scene.start("GameScene",{timeToComplete:this.timeToComplete,piecesSize:this.piecesSize,puzzleImage:this.puzzleImage})}}let s={TOTAL:0,CURRENT:0,ATTEMPTS:0,MAX_ATTEMPTS:0,TIME:0,GAME_OVER:!1,CURRENT_PIECES:0,TOTAL_PIECES:0};class i{constructor(e,t,s){this.scene=e,this.gameWidth=t,this.gameHeight=s,this.barBody=new Phaser.GameObjects.Graphics(this.scene),this.barHeightScale=8,this.barColor=170,this.barStrokeColor=16763904,this.buildBar()}buildBar(){this.barBody=this.scene.add.graphics(),this.barBody.beginPath(),this.barBody.fillStyle(this.barStrokeColor,1),this.barBody.fillRoundedRect(0,0,this.gameWidth,this.gameHeight/(this.barHeightScale-.3),{tl:0,tr:0,bl:20,br:20}),this.barBody.strokePath(),this.barBody.closePath(),this.barBody.beginPath(),this.barBody.fillStyle(this.barColor,1),this.barBody.fillRoundedRect(0,0,this.gameWidth,this.gameHeight/this.barHeightScale,{tl:0,tr:0,bl:24,br:24}),this.barBody.strokePath(),this.barBody.closePath()}getHeight(){return this.gameHeight/this.barHeightScale}}class h{constructor(e,t,s,i,h){this.puzzlePercW=.7,this.piecesPercW=.3,this.imageAlpha=.2,this.gapInBetween=50,this.gapSide=50,this.scene=e,this.boardW=t,this.boardH=s,this.centerGridOffsetY=i,this.puzzleW=this.boardW*this.puzzlePercW-2*this.gapSide,this.puzzleH=this.boardH-2*this.gapSide,this.image=this.addImage(h,this.imageAlpha,!0,.5),this.imageAux=this.addImage(h,1,!1,0),this.imageAux.setPosition(this.gapSide,this.centerGridOffsetY+this.boardH/2-this.imageAux.height/2)}addImage(e,t,s,i){var h=this.scene.add.image(0,0,e).setInteractive().setAlpha(t).setVisible(s).setOrigin(i);return(h=((e,t,s)=>{let i=1,h=1;i=e/s.width,h=t/s.height;let a=Math.min(Number(i.toFixed(3)),Number(h.toFixed(3)));return s.setScale(a).setSize(Math.floor(s.width*a),Math.floor(s.height*a)),s.setData("scaled_value",a),s.setData("scaled_w",Math.floor(s.width*a)),s.setData("scaled_h",Math.floor(s.height*a)),s})(this.puzzleW,this.puzzleH,h)).setPosition(this.puzzleW/2+this.gapSide,this.centerGridOffsetY+this.boardH/2),h}setImagePos(e,t,s){e.setPosition(t,s)}calculatePuzzlePieces(e){return{horizontal:Math.floor((this.puzzleW-2*this.gapSide)/e),vertical:Math.floor((this.puzzleH-2*this.gapSide)/e)}}calculatePieceDimensions(e,t){return{width:this.image.width/e,height:this.image.height/t}}getImage(){return this.image}getImageAux(){return this.imageAux}}class a{constructor(e,t,s,i,h,a,o,r,c,n,d,l){this.scene=e,this.pieceW=t,this.pieceH=s,this.pieceRadius=i,this.offsetX=h,this.offsetY=a,this.top=o,this.right=r,this.bottom=c,this.left=n,this.lineWidth=d,this.fillColor=l,this.graphics=this.scene.add.graphics()}drawPiece(e,t,s){var i,h,a,o,r=this.scene.add.path(e,t);const c=.4,n=.6,d=.3,l=.5,p=.7;var f,g,u,m,P,w;0==this.top?(i=new Phaser.Math.Vector2(this.offsetX,this.offsetY),h=new Phaser.Math.Vector2(this.offsetX+this.pieceW,this.offsetY),a=new Phaser.Curves.Line(i,h),r.add(a)):(i=new Phaser.Math.Vector2(this.offsetX,this.offsetY),h=new Phaser.Math.Vector2(this.offsetX+this.pieceW*c,this.offsetY),a=new Phaser.Curves.Line(i,h),r.add(a),i=new Phaser.Math.Vector2(this.offsetX+this.pieceW*n,this.offsetY),h=new Phaser.Math.Vector2(this.offsetX+this.pieceW,this.offsetY),o=new Phaser.Curves.Line(i,h),r.add(o),g=new Phaser.Math.Vector2(this.offsetX+this.pieceW*c,this.offsetY),u=new Phaser.Math.Vector2(this.offsetX+this.pieceW*d,this.offsetY-this.top*this.pieceRadius/2),m=new Phaser.Math.Vector2(this.offsetX+this.pieceW*l,this.offsetY-this.top*this.pieceRadius),P=new Phaser.Math.Vector2(this.offsetX+this.pieceW*p,this.offsetY-this.top*this.pieceRadius/2),w=new Phaser.Math.Vector2(this.offsetX+this.pieceW*n,this.offsetY),f=new Phaser.Curves.Spline([g,u,m,P,w]),r.add(f)),0==this.right?(i=new Phaser.Math.Vector2(this.offsetX+this.pieceW,this.offsetY),h=new Phaser.Math.Vector2(this.offsetX+this.pieceW,this.offsetY+this.pieceH),a=new Phaser.Curves.Line(i,h),r.add(a)):(i=new Phaser.Math.Vector2(this.offsetX+this.pieceW,this.offsetY),h=new Phaser.Math.Vector2(this.offsetX+this.pieceW,this.offsetY+this.pieceH*c),a=new Phaser.Curves.Line(i,h),r.add(a),g=new Phaser.Math.Vector2(this.offsetX+this.pieceW,this.offsetY+this.pieceH*c),u=new Phaser.Math.Vector2(this.offsetX+this.pieceW+this.right*this.pieceRadius/2,this.offsetY+this.pieceH*d),m=new Phaser.Math.Vector2(this.offsetX+this.pieceW+this.right*this.pieceRadius,this.offsetY+this.pieceH*l),P=new Phaser.Math.Vector2(this.offsetX+this.pieceW+this.right*this.pieceRadius/2,this.offsetY+this.pieceH*p),w=new Phaser.Math.Vector2(this.offsetX+this.pieceW,this.offsetY+this.pieceH*n),f=new Phaser.Curves.Spline([g,u,m,P,w]),r.add(f),i=new Phaser.Math.Vector2(this.offsetX+this.pieceW,this.offsetY+this.pieceH*n),h=new Phaser.Math.Vector2(this.offsetX+this.pieceW,this.offsetY+this.pieceH),a=new Phaser.Curves.Line(i,h),r.add(a)),0==this.bottom?(i=new Phaser.Math.Vector2(this.offsetX+this.pieceW,this.offsetY+this.pieceH),h=new Phaser.Math.Vector2(this.offsetX,this.offsetY+this.pieceH),a=new Phaser.Curves.Line(i,h),r.add(a)):(i=new Phaser.Math.Vector2(this.offsetX+this.pieceW,this.offsetY+this.pieceH),h=new Phaser.Math.Vector2(this.offsetX+this.pieceW*n,this.offsetY+this.pieceH),a=new Phaser.Curves.Line(i,h),r.add(a),g=new Phaser.Math.Vector2(this.offsetX+this.pieceW*n,this.offsetY+this.pieceH),u=new Phaser.Math.Vector2(this.offsetX+this.pieceW*p,this.offsetY+this.pieceH+this.bottom*this.pieceRadius/2),m=new Phaser.Math.Vector2(this.offsetX+this.pieceW*l,this.offsetY+this.pieceH+this.bottom*this.pieceRadius),P=new Phaser.Math.Vector2(this.offsetX+this.pieceW*d,this.offsetY+this.pieceH+this.bottom*this.pieceRadius/2),w=new Phaser.Math.Vector2(this.offsetX+this.pieceW*c,this.offsetY+this.pieceH),f=new Phaser.Curves.Spline([g,u,m,P,w]),r.add(f),i=new Phaser.Math.Vector2(this.offsetX+this.pieceW*c,this.offsetY+this.pieceH),h=new Phaser.Math.Vector2(this.offsetX,this.offsetY+this.pieceH),a=new Phaser.Curves.Line(i,h),r.add(a)),0==this.left?(i=new Phaser.Math.Vector2(this.offsetX,this.offsetY+this.pieceH),h=new Phaser.Math.Vector2(this.offsetX,this.offsetY),a=new Phaser.Curves.Line(i,h),r.add(a)):(i=new Phaser.Math.Vector2(this.offsetX,this.offsetY+this.pieceH),h=new Phaser.Math.Vector2(this.offsetX,this.offsetY+this.pieceH*n),a=new Phaser.Curves.Line(i,h),r.add(a),g=new Phaser.Math.Vector2(this.offsetX,this.offsetY+this.pieceH*n),u=new Phaser.Math.Vector2(this.offsetX-this.left*this.pieceRadius/2,this.offsetY+this.pieceH*p),m=new Phaser.Math.Vector2(this.offsetX-this.left*this.pieceRadius,this.offsetY+this.pieceH*l),P=new Phaser.Math.Vector2(this.offsetX-this.left*this.pieceRadius/2,this.offsetY+this.pieceH*d),w=new Phaser.Math.Vector2(this.offsetX,this.offsetY+this.pieceH*c),f=new Phaser.Curves.Spline([g,u,m,P,w]),r.add(f),i=new Phaser.Math.Vector2(this.offsetX,this.offsetY+this.pieceH*c),h=new Phaser.Math.Vector2(this.offsetX,this.offsetY),a=new Phaser.Curves.Line(i,h),r.add(a)),this.graphics.beginPath(),r.closePath(),r.draw(this.graphics),this.hitAreaPoints=r.getPoints(),this.graphics.lineStyle(this.lineWidth,0,1),this.graphics.fillStyle(this.fillColor,1),this.graphics.fillPoints(this.hitAreaPoints),this.graphics.setPosition(e,t),this.graphics.setDepth(s),this.graphics.closePath()}getPieceGraphObj(){return this.graphics}getHitAreaPoints(){return this.hitAreaPoints}}const o=e=>1==e.t&&1==e.b?2:1==e.r&&1==e.l?1:0,r=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;class c{constructor(e,t,s,i,h,a){this.scene=e,this.numHorizontalPieces=t,this.numVerticalPieces=s,this.pieceW=i,this.pieceH=h,this.pieceRadius=a}generatePiecesInPuzzleBoard(e){var t,s,i,h,o,r=[],c=[],n=e.getTopLeft();for(let d=0;d<this.numVerticalPieces;d++){for(let e=0;e<this.numHorizontalPieces;e++){0==d?(s=0,0==e?(i=-1,h=1,o=0):-1==r[e-1].r?(i=1,h=-1,o=1):(i=-1,h=1,o=-1)):1==c[d-1][e].b?(s=-1,h=-1,i=1,o=1):(s=1,h=1,i=-1,o=-1),0==e?o=0:e==this.numHorizontalPieces-1&&(i=0),d==this.numVerticalPieces-1&&(h=0);new a(this.scene,this.pieceW,this.pieceH,this.pieceRadius,0,0,s,i,h,o,1,4949684).drawPiece(n.x+e*this.pieceW,n.y+d*this.pieceH,-1),t={t:s,r:i,b:h,l:o,pos_x:n.x+e*this.pieceW,pos_y:n.y+d*this.pieceH},r.push(t)}c.push(r),r=[]}this.piecesInfoArr=c}generateOutsidePieces(e){var t,s,i,h,c,n,d,l=[],p=[];for(let m=0;m<this.numVerticalPieces;m++){for(let p=0;p<this.numHorizontalPieces;p++){c=this.piecesInfoArr[m][p],s=this.pieceH,h=m*this.pieceH,1==c.t&&(s+=this.pieceRadius,h-=this.pieceRadius),1==c.b&&(s+=this.pieceRadius),t=this.pieceW,i=p*this.pieceW,1==c.r&&(t+=this.pieceRadius),1==c.l&&(t+=this.pieceRadius,i-=this.pieceRadius),this.scene.make.renderTexture({width:t,height:s},!1).draw(e,-i,-h).saveTexture("piece["+m+","+p+"]");var f=this.scene.add.image(e.getTopLeft().x+i,e.getTopLeft().y+h,"piece["+m+","+p+"]").setOrigin(0);1==o(c)&&(i+=this.pieceRadius),2==o(c)&&(h+=this.pieceRadius),1==c.l&&0==c.r&&(i+=this.pieceRadius),1==c.t&&0==c.b&&(h+=this.pieceRadius);const P=new a(this.scene,this.pieceW,this.pieceH,this.pieceRadius,0,0,c.t,c.r,c.b,c.l,1.5,6908265);P.drawPiece(e.getTopLeft().x+i,e.getTopLeft().y+h,-1);const w=P.getPieceGraphObj();f.setMask(w.createGeometryMask()),n=w.x-f.x,d=w.y-f.y,f.setData("x_offset",n),f.setData("y_offset",d),f.setData("line_ref",m),f.setData("column_ref",p),f.setData("lock_pos",{x:w.x,y:w.y}),f.setInteractive(),this.scene.input.setDraggable(f),f.input.draggable=!0,console.log(w);var g={pieceImg:f,pieceObj:w};l.push(g);var u={x:r(100,300),y:r(100,400)};const b=u.x-n,H=u.y-d;f.setPosition(b,H),w.setPosition(b+n,H+d)}p.push(l),l=[]}return p}}class n extends Phaser.Scene{constructor(){super({key:"GameScene"}),this.depthCounter=0,this.pieceLockTolerance=15}init(e){this.gameHeight=this.sys.canvas.height,this.gameWidth=this.sys.canvas.width,this.timeToComplete=e.timeToComplete,this.piecesSize=e.piecesSize,this.puzzleImage=e.puzzleImage}create(){this.topBar=new i(this,this.gameWidth,this.gameHeight);var e=new h(this,this.gameWidth,this.gameHeight-this.topBar.getHeight(),this.topBar.getHeight(),this.puzzleImage.id);const{horizontal:t,vertical:a}=e.calculatePuzzlePieces(this.piecesSize);this.numHorizontalPieces=t,this.numVerticalPieces=a,s.TOTAL_PIECES=t*a;const{width:o,height:r}=e.calculatePieceDimensions(this.numHorizontalPieces,this.numVerticalPieces);this.pieceW=o,this.pieceH=r,this.pieceRadius=(this.pieceW+this.pieceH)/2/3;var n=new c(this,this.numHorizontalPieces,this.numVerticalPieces,this.pieceW,this.pieceH,this.pieceRadius);n.generatePiecesInPuzzleBoard(e.getImage());const d=n.generateOutsidePieces(e.getImageAux());console.log(d),this.input.on("dragstart",((e,t)=>this.dragHandlerStart(t))),this.input.on("drag",((e,t,s,i)=>this.dragHandler(t,s,i,d))),this.input.on("dragend",((e,t)=>this.dragEndHandler(t,d))),this.select_sound=this.sound.add("select"),this.drop_sound=this.sound.add("drop_piece"),this.right_sound=this.sound.add("right_place"),this.complete_sound=this.sound.add("complete_puzzle")}dragHandlerStart(e){e.setDepth(++this.depthCounter),this.select_sound.play()}dragHandler(e,t,s,i){const h=e.getData("line_ref"),a=e.getData("column_ref"),o=e.getData("x_offset"),r=e.getData("y_offset"),c=e.getData("lock_pos");var n=i[h][a].pieceObj;if(((e,t,s,i)=>t>e.x-i&&t<e.x+i&&s>e.y-i&&s<e.y+i)(c,t+o,s+r,this.pieceLockTolerance)){const t=c.x-o,s=c.y-r;e.setPosition(t,s),n.setPosition(t+o,s+r)}else e.setPosition(t,s),n.setPosition(t+o,s+r)}dragEndHandler(e,t){const i=e.getData("lock_pos"),h=e.getData("line_ref"),a=e.getData("column_ref");var o=t[h][a].pieceObj;o.x==i.x&&o.y==i.y?(this.input.setDraggable(e,!1),e.input.draggable=!1,e.setDepth(1),s.CURRENT_PIECES++,s.CURRENT_PIECES==s.TOTAL_PIECES?(this.complete_sound.play(),s.GAME_OVER=!0,this.scene.launch("GameEndScene",{width:this.gameWidth,height:this.gameHeight,win:!0})):this.right_sound.play()):this.drop_sound.play()}}class d{constructor(e,t,s,i,h,a){this.scene=e,this.barColor=170,this.barStrokeColor=16763904,this.buildMenu(t,s,i,h,a)}buildMenu(e,t,s,i,h){this.menuRect=this.scene.add.graphics(),this.menuRect.beginPath(),this.menuRect.fillStyle(this.barStrokeColor,1),this.menuRect.fillRoundedRect(e-h/2,t-h/2,s+h,i+h,{tl:20,tr:20,bl:20,br:20}),this.menuRect.strokePath(),this.menuRect.closePath(),this.menuRect.beginPath(),this.menuRect.fillStyle(this.barColor,1),this.menuRect.fillRoundedRect(e,t,s,i,{tl:20,tr:20,bl:20,br:20}),this.menuRect.strokePath(),this.menuRect.closePath()}getMenuRect(){return this.menuRect}}class l extends Phaser.Scene{constructor(){super({key:"GameEndScene"})}init(e){this.gameWidth=e.width,this.gameHeight=e.height,this.win=e.win}create(){this.modal=this.add.rectangle(0,0,this.gameWidth,this.gameHeight,0,.6).setOrigin(0);const e=.5*this.gameWidth,t=.5*this.gameHeight,s=this.gameWidth/2-e/2,i=this.gameHeight/2-t/2,h=.015*e;this.menu=new d(this,s,i,e,t,h);let a="";a=this.win?"Parabéns, ganhaste!":"Não conseguiste, tenta outra vez!";let o=this.add.text(0,0,a,{fontFamily:"Arial",fontSize:32,color:"#ffffff",align:"center"});o.setPosition(this.gameWidth/2,i+2*o.height).setOrigin(.5);var r=new Phaser.Geom.Circle(this.gameWidth/2,i+t/2.2,(t-i)/2.1).getPoints(12);let c=0;for(var n=0;n<r.length;n++){var l=r[n];c>r.length-2?c=0:c++;let e=this.add.image(l.x,l.y,"star").setScale(.1).setTint(16763904);this.tweens.add({targets:e,scaleX:.15625,scaleY:.15625,ease:"Sine.easeInOut",duration:1e3,repeat:-1,yoyo:!0})}this.btn=this.add.graphics(),this.btn.fillStyle(16776960,1);const p=e/2,f=t/8,g=this.gameWidth/2-e/4,u=i+.8*t;this.btn.fillRoundedRect(g,u,p,f,24),this.add.text(0,0,"Jogar novamente",{fontFamily:"Arial",fontSize:32,color:"#0000aa",align:"center"}).setPosition(this.gameWidth/2,u+o.height).setOrigin(.5);var m=new Phaser.Geom.Rectangle(g,u,p,f);this.btn.setInteractive(m,Phaser.Geom.Rectangle.Contains),this.btn.on("pointerdown",(()=>{window.location.reload()}))}}const p={type:Phaser.AUTO,parent:"game",backgroundColor:2772329,scale:{width:1600,height:1200,mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},fps:{target:30,forceSetTimeOut:!0},scene:[t,n,l]};class f extends Phaser.Game{constructor(e){super(e)}}window.addEventListener("load",(()=>{new f(p)}));