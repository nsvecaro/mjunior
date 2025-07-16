<template>

    <section id="hero">
        <div class="container">
            <div class="left">
                <hero-text />
            </div>
            <div class="right">
                <hero-slideshow />
            </div>

        </div>


    </section>



</template>

<style scoped>

#hero{
    margin: 80px 120px 80px 120px;
    height: 100%;
    min-height: 100vh;
}
.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>