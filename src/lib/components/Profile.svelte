<script>
	import TimeLineDot from './ui/TimeLineComponent/TimeLineDot.svelte';
	import { profile } from './../../utils/data';
	import Button from './ui/button/button.svelte';
	import LinkIcon from '$lib/assets/LinkIcon.png';
	import UpIcon from '$lib/assets/UpIcon.png';
	import DotHorizontal from '$lib/assets/DotHorizontal.png';
	import TimeLine from './ui/TimeLineComponent/TimeLine.svelte';
	import TimeLineItem from './ui/TimeLineComponent/TimeLineItem.svelte';
	import TimeLineOppositeContent from './ui/TimeLineComponent/TimeLineOppositeContent.svelte';
	import TimeLineSeparator from './ui/TimeLineComponent/TimeLineSeparator.svelte';
	import TimeLineConnector from './ui/TimeLineComponent/TimeLineConnector.svelte';
	import * as Card from '$lib/components/ui/card';
	import TimeLineContent from './ui/TimeLineComponent/TimeLineContent.svelte';
	import { follow } from '$lib/store/followStore';
	import ModalComponent from './ModalComponent.svelte';
</script>

<div class="flex flex-col items-start  mt-10">
	<!-- profile header -->
	<div class="flexCenter mx-20 gap-11 p-10">
		<div class=" flexCenter flex-col">
			<img src={profile.pic.src} alt={profile.pic.alt} />
			<div class="flexCenter flex-col">
				<span class="bold-24 text-black-200">{profile.name.firstName}</span>
				<span class="bold-24 text-black-200">{profile.name.lastName}</span>
			</div>
		</div>

		<div class="flex flex-col justify-between">
			<p class="text-wrap text-black-300">{profile.description}</p>
			<ModalComponent />
		</div>


		<!-- last part -->
		<div class="flex flex-col">
			<div class="flex flex-col items-end">
				<img src={profile.company.logo.src} alt={profile.company.logo.alt} />
				<p class="bold-16 text-black-1000">{profile.company.name}</p>
				<p class="text-nowrap text-[0.75rem] text-silver-100">{profile.company.designation}</p>
			</div>

			<div class="flexCenter mt-10 items-end gap-5">
				<div class="flexCenter gap-1">
					<a href={profile.webLink} class="text-nowrap text-[0.875rem] text-black-100"
						>My Website
					</a>
					<img src={LinkIcon} alt="logo of the link icon" />
				</div>

				<img src={DotHorizontal} alt="Logo of the dots" />
			</div>
		</div>
	</div>

	<!-- profile info -->
	<div class=" mt-5">
		<TimeLine>
			{#each profile.info as data}
				<TimeLineItem style={`min-height : 288px`}>
					<TimeLineOppositeContent>
						<p class="text-silver-100">{data.articles.date}</p>
					</TimeLineOppositeContent>
					<TimeLineSeparator>
						<TimeLineConnector style={`min-height : 288px;`} />
						<TimeLineDot style={`border-width: 3px;`} />
						<img src={UpIcon} alt="Up Arrow Icon" class="absolute bottom-0" />
					</TimeLineSeparator>
					<TimeLineContent
						style={`display : flex; flex-direction: row; align-items:center; justify-items:center; gap: 2rem;`}
					>
						{#each data.articles.posts as post}
							<Card.Root class="w-[21.5rem]">
								<Card.Header class="relative">
									<img
										src={post.pic.src}
										alt={post.pic.alt}
										class="h-full max-h-full w-full max-w-full rounded-t-lg object-cover"
									/>
								</Card.Header>
								<Card.Content>
									<p class="text-start text-[0.875rem] text-black-300">{post.content}</p>
								</Card.Content>
							</Card.Root>
						{/each}
					</TimeLineContent>
				</TimeLineItem>

				<TimeLineItem style={`min-height : 288px`}>
					<TimeLineOppositeContent>
						<img
							src={data.designationInfo.description.logo.src}
							alt={data.designationInfo.description.logo.alt}
							class="h-[3rem] w-[3rem]"
						/>
						<p class="bold-16 mt-1 text-black-300">
							{data.designationInfo.description.organisatioName}
						</p>
						<p class="text-[0.75rem] text-silver-100">
							{data.designationInfo.description.location}
						</p>
						<p class="text-[0.75rem] text-silver-100">Joined</p>
						<p class="text-[0.75rem] text-silver-100">
							{data.designationInfo.description.joinedDate}
						</p>
					</TimeLineOppositeContent>
					<TimeLineSeparator>
						<TimeLineConnector style={`min-height : 288px;`} />
						<TimeLineDot style={`border-width: 9px;`} />
					</TimeLineSeparator>
					<TimeLineContent>
						<div class="px-[0.5rem] py-[1.5rem]">
							<p class="bold-20">{data.designationInfo.designation.title}</p>
							<div class="flex flex-row items-start gap-1">
								<p class="text-[0.75rem] text-silver-100">
									{data.designationInfo.designation.mode}
								</p>
							</div>
						</div>
					</TimeLineContent>
				</TimeLineItem>
			{/each}
		</TimeLine>
	</div>
</div>
