<template>
  <div ref="sidebar" class="sidebar">
    <!-- Logo en haut de la sidebar -->
    <div ref="logoL" class="logo-containerL mb-6 flex justify-center">
      <img src="/logo_sidebar.png" alt="BTC Énergies Logo"/>
    </div>

    <br>

    <!-- Deuxième image avec taille plus grande -->
    <div ref="logoS" class="logo-containerS mb-6 flex justify-center">
      <img src="/LeSoDeDe.png" alt="Les Solutions de demain"/>
    </div>

    <br>

    <!-- Flèche supplémentaire centrée au-dessus du menu -->
    <div ref="arrowH" class="menu-arrow_H"></div>

    <ul ref="menuList" class="scrollable-list font-Urbanist text-white text-lg">
      <li v-for="(item, index) in menuItems" :key="index" ref="menuItems">
        <a href="#">{{ item }}</a>
      </li>
    </ul>

    <!-- Flèche supplémentaire centrée sous le menu -->
    <div ref="arrowB" class="menu-arrow_B"></div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import gsap from "gsap";

export default {
  name: "Sidebar",
  setup() {
    const sidebar = ref(null);
    const logoL = ref(null);
    const logoS = ref(null);
    const menuList = ref(null);
    const menuItems = [
      "Accueil",
      "Notre Constat",
      "Nos solutions",
      "Financements et partenaires",
      "Notre équipe",
      "Contact",
      "Et demain ?",
      "Mentions légales"
    ];

    onMounted(() => {
  gsap.from(logoL.value, {
    opacity: 0,
    scale: 0.8,
    duration: 2,
    ease: "power2.out",
  });

  // Effet de zoom au survol pour chaque élément du menu
  Array.from(menuList.value.children).forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, {
        scale: 1.1, // Zoom léger
        duration: 0.3,
        ease: "power2.out",
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        scale: 1, // Retour à la taille normale
        duration: 0.3,
        ease: "power2.out",
      });
    }); //  Cette accolade ferme correctement la boucle forEach()
  });

      gsap.from(logoS.value, {
        opacity: 0,
        y: -30,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      });

      gsap.from(menuList.value.children, {
        opacity: 0,
        x: -50,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out",
      });
    });

    return {
      sidebar,
      logoL,
      logoS,
      menuList,
      menuItems,
    };
  }, // <- Fermeture correcte de `setup()`
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  padding: 20px;
}

.scrollable-list li {
  padding: 8px 0;
  transition: color 1.8s ease-in-out;
}

.scrollable-list li:hover {
  color: #d8e8ec;
}
</style>
