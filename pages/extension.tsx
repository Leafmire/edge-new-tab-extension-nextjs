import React, { useState } from 'react'

export default function Extension() {
	const [url, setUrl] = useState<string>('');

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		chrome.storage.sync.set({ new_tab_url: url }).then(() => {
			console.log('Value is set to ' + url);
		});
	}

	return (
		<div className="popup p-4 min-w-[300px]">
			<div className="popup-content">
				<label htmlFor="url" className="block text-sm font-medium leading-6 text-gray-900">
					Insert URL
				</label>
				<div className="popup-body mt-2">
					<input
						type="text"
						id="url"
						name="url"
						className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						value={url}
						onChange={(e) => { setUrl(e.target.value) }}
						placeholder="https://www.google.com/"
					/>
					<p className="mt-2">
						<span className="text-sm text-gray-500">Current setting: {url}</span>
					</p>
				</div>
				<div className="popup-footer mt-4">
					<button
						id="submit"
						className="rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
						type="submit"
						onClick={handleSubmit}
					>
						save
					</button>
				</div>
			</div>
		</div>
	)
}
