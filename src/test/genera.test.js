describe('probando JEST', () =>{
test ('la prueba de objetos iguales',()=>{
    const inf1= {
        nombre: 'Emanuel',
        edad: 28
    };
    const inf2= {
         nombre= 'Emanuel',
         edad:28
    };
    expect(inf1).toEqual(inf2);
})

})