(()=>{class t{constructor(t){this.data=t;for(let t=0;t<8;t++)this[t]=null}}class a{constructor(a,n){this.root=new t(a),this.end=n}AllPaths=function(a=[this.root]){if(!a.length)return;let n=a.shift();if(JSON.stringify(n.data)===JSON.stringify(this.end))return this.Paths(this.root,this.end);n[0]=new t([n.data[0]+1,n.data[1]+2]),n[1]=new t([n.data[0]+1,n.data[1]-2]),n[2]=new t([n.data[0]-1,n.data[1]+2]),n[3]=new t([n.data[0]-1,n.data[1]-2]),n[4]=new t([n.data[0]+2,n.data[1]+1]),n[5]=new t([n.data[0]+2,n.data[1]-1]),n[6]=new t([n.data[0]-2,n.data[1]+1]),n[7]=new t([n.data[0]-2,n.data[1]-1]);for(let t=0;t<8;t++)(n[t].data[0]<0||n[t].data[0]>7||n[t].data[1]<0||n[t].data[1]>7)&&(n[t]=null),n[t]&&a.push(n[t]);return this.AllPaths(a)};Paths(t=this.root,a,n=[]){if(!t)return;if(JSON.stringify(t.data)==JSON.stringify(a))return n.push(t.data),`You made it in ${n.length} moves!  Here's your path: \n${n.join("\n")}`;let s=n.map((t=>t));s.push(t.data);for(let n=0;n<8;n++){let e=this.Paths(t[n],a,s);if(e)return e}}}!function(t,n){let s=new a([0,0],[7,7]);console.log(s.AllPaths())}()})();