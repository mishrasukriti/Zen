 let para1= document.createElement('h1');
 para1.setAttribute('id','countdown_para');
 para1.setAttribute('style','display:inline; margin:150px; font-size:62px;');
 let para2= document.createElement('h1');
 para2.setAttribute('id','message');
 para2.setAttribute('style','display:none; ');
 para2.innerText='Happy Independence Day';

 document.body.append(para1,para2);
    
        let count = 10;
        setTimeout(function() {
            document.getElementById('countdown_para').textContent = `Your message will appear in ${count--} seconds`;
            setTimeout(function() {
                document.getElementById('countdown_para').textContent = `Your message will appear in ${count--} seconds`;
                setTimeout(function() {
                    document.getElementById('countdown_para').textContent = `Your message will appear in ${count--} seconds`;
                    setTimeout(function() {
                        document.getElementById('countdown_para').textContent =`Your message will appear in ${count--} seconds`;
                        setTimeout(function() {
                            document.getElementById('countdown_para').textContent = `Your message will appear in ${count--} seconds`;
                            setTimeout(function() {
                                document.getElementById('countdown_para').textContent = `Your message will appear in ${count--} seconds`;
                                setTimeout(function() {
                                    document.getElementById('countdown_para').textContent = `Your message will appear in ${count--} seconds`;
                                    setTimeout(function() {
                                        document.getElementById('countdown_para').textContent = `Your message will appear in ${count--} seconds`;
                                        setTimeout(function() {
                                            document.getElementById('countdown_para').textContent = `Your message will appear in ${count--} seconds`;
                                            setTimeout(function() {
                                                document.getElementById('countdown_para').textContent = `Your message will appear in ${count--} seconds`;
                                               
                                                setTimeout(() => {
                                                    document.getElementById('countdown_para').setAttribute('style', 'display:none');
                                                    document.getElementById('message').setAttribute('style', 'display:inline; font-size:72px; color:orange; background-color: green; margin-left:300px;');
                                                }, 1000);
                                            },1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    
    
   