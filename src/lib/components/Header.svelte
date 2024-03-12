<script>
	import { menus, profile } from "../../utils/data";
	import Logo from '$lib/assets/LogoIcon.png';
	import Button from "./ui/button/button.svelte";
	import DownIcon from "$lib/assets/DownIcon.png";
	import Post from "$lib/components/Post.svelte";
</script>



<div class="flexBetween py-[0.625rem]  border-b-2 border-silver-100 border-dotted">
	
	<div class="flexCenter gap-1">
		<img src={Logo} alt="Logo" />
		<p class="text-black-1000 bold-20">duggup</p>
	</div>

	<div class="flexCenter gap-10">

		<div  class="gap-5 flexCenter">
			{#each menus as menu}
				<div class="gap-2 flexCenter">
					<img src={menu.icon.src} alt={menu.icon.alt}/>
					<p class="text-black-100">{menu.name}</p>
				</div>
			{/each}
		</div>


		<Post />


		<div class="flexCenter gap-2">
			<img src={profile.pic.src} alt={profile.pic.alt} class="w-[2.875rem] h-[2.875rem]"/>
			<div class="flexCenter flex-row gap-1">
				<p class="text-black-100 bold-20">{profile.name.firstName}</p>
				<p class="text-black-100 bold-20">{profile.name.lastName}</p>
			</div>
			<img src={DownIcon} alt="Arrow Down Icon"/>
		</div>
	</div>
</div>


