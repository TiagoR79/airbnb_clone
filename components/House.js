
import Link from 'next/link'

export default function House(props) {

	//console.log(props)

	return(
		/*
			We import the link package(?) and use it to do routing
			We are setting the url according to the house id to render the correct details
		*/
		<Link href="/houses/[id]" as={'/houses/' + props.id}>
			<a>
				<div>
					<img src={props.picture} width="100%" alt="House picture" />
					<p>
						{props.type} - {props.town}
					</p>
					<p>{props.title}</p>
				</div>
			</a>
		</Link>
	)
}
