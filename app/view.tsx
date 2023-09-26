"use client";

import { useEffect } from "react";

export const ReportView: React.FC<{ unit: string,slug: string }> = ({ unit, slug }) => {
	useEffect(() => {
		fetch("/api/incr", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ unit, slug }),
		});
	}, [unit, slug]);

	return null;
};
