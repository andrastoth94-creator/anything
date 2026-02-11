// Simplified stub for production builds without zustand dependency

export type SandboxStatus =
	| 'idle'
	| 'codegen-started'
	| 'codegen-generating'
	| 'codegen-complete'
	| 'codegen-error'
	| 'codegen-stopped'
	| 'refresh-requested'
	| 'refresh-complete';

interface SandboxState {
	status: SandboxStatus;
	isGenerating: boolean;
	hasError: boolean;

	setStatus: (status: SandboxStatus) => void;

	startCodeGen: () => void;
	setCodeGenGenerating: () => void;
	completeCodeGen: () => void;
	errorCodeGen: () => void;
	stopCodeGen: () => void;
	resetToIdle: () => void;
}

// Simple stub implementation for production
export const useSandboxStore = (): SandboxState => ({
	status: 'idle',
	isGenerating: false,
	hasError: false,
	setStatus: () => {},
	startCodeGen: () => {},
	setCodeGenGenerating: () => {},
	completeCodeGen: () => {},
	errorCodeGen: () => {},
	stopCodeGen: () => {},
	resetToIdle: () => {},
});
