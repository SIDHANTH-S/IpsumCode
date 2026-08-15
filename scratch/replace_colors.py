import os
import re

replacements = {
    # Surfaces
    r'bg-\[\#0a0a0a\]': 'bg-bg-base',
    r'bg-\[\#0d0d0d\]': 'bg-bg-base',
    r'bg-\[\#141414\]': 'bg-surface-base',
    r'bg-\[\#171717\]': 'bg-surface-base',
    r'bg-\[\#1a1a1a\]': 'bg-surface-base',
    r'bg-\[\#1e1e1e\]': 'bg-surface-base',
    r'bg-\[\#262626\]': 'bg-surface-hover',
    r'bg-\[\#3f3f46\]': 'bg-surface-hover',
    r'bg-\[\#404040\]': 'bg-surface-hover',

    # Borders
    r'border-\[\#262626\]': 'border-border-default',
    r'border-\[\#1c1c1c\]': 'border-border-default',
    r'border-\[\#333\]': 'border-border-default',
    r'border-\[\#444\]': 'border-border-default',

    # Text Primary/Secondary/Muted
    r'text-\[\#f5f5f5\]': 'text-text-primary',
    r'text-\[\#e2e8f0\]': 'text-text-primary',
    r'text-\[\#a1a1aa\]': 'text-text-secondary',
    r'text-\[\#a8a8a8\]': 'text-text-secondary',
    r'text-\[\#b3b3b3\]': 'text-text-secondary',
    r'text-\[\#b8b8b8\]': 'text-text-secondary',
    r'text-\[\#a2a2a2\]': 'text-text-secondary',
    r'text-\[\#8a8a8a\]': 'text-text-muted',
    r'text-\[\#808080\]': 'text-text-muted',
    r'text-\[\#999\]': 'text-text-muted',

    # Accent
    r'bg-\[\#5b4aef\]': 'bg-accent-base',
    r'bg-\[\#635ce6\]': 'bg-accent-base',
    r'hover:bg-\[\#4d3ee0\]': 'hover:bg-accent-hover',
    r'text-\[\#7c6cf5\]': 'text-accent-text',
    r'text-\[\#b3a8ff\]': 'text-accent-text-muted',
    r'text-\[\#8f7dff\]': 'text-accent-text-muted',
    r'text-\[\#9b8dff\]': 'text-accent-text-muted',
    r'text-\[\#a49aff\]': 'text-accent-text-muted',
    r'border-\[\#5b4aef\]': 'border-accent-base',
    r'ring-\[\#5b4aef\]': 'ring-accent-base',
    r'shadow-\[\#5b4aef\]': 'shadow-accent-base',

    # Status Success
    r'bg-\[\#1cbaba\]': 'bg-status-success',
    r'border-\[\#1cbaba\]': 'border-status-success',
    r'text-\[\#1cbaba\]': 'text-status-success',

    # Status Warning
    r'bg-\[\#f5a524\]': 'bg-status-warning',
    r'border-\[\#f5a524\]': 'border-status-warning',
    r'text-\[\#f5a524\]': 'text-status-warning',
    r'text-\[\#ffb700\]': 'text-status-warning',
    r'text-\[\#eab308\]': 'text-status-warning',

    # Status Danger
    r'text-\[\#ff9b9b\]': 'text-status-danger',
    r'border-\[\#ff9b9b\]': 'border-status-danger',
    r'bg-\[\#ff9b9b\]': 'bg-status-danger',
    r'bg-\[\#ef4743\]': 'bg-status-danger-dark',
    r'text-\[\#ef4743\]': 'text-status-danger-dark',
    r'bg-\[\#d63f3b\]': 'bg-status-danger-dark',

    # Typography
    r'text-\[10px\]': 'text-text-xs',
    r'text-\[10\.5px\]': 'text-text-xs',
    r'text-\[11px\]': 'text-text-xs',
    r'text-\[11\.5px\]': 'text-text-xs',
    r'text-\[12px\]': 'text-text-sm',
    r'text-\[12\.5px\]': 'text-text-sm',
    r'text-\[13px\]': 'text-text-base',
    r'text-\[13\.5px\]': 'text-text-base',
    r'text-\[14px\]': 'text-text-md',
    r'text-\[15px\]': 'text-text-lg',
    r'text-\[16px\]': 'text-text-lg',
    r'text-\[18px\]': 'text-text-xl',
    r'text-\[20px\]': 'text-text-xl',
    r'text-\[22px\]': 'text-text-2xl',

    # Structural
    r'py-\[9px\]': 'py-spacing-btn-y',
    r'rounded-\[3px\]': 'rounded-radius-md',
    r'rounded-\[11px\]': 'rounded-radius-xl',
    r'shadow-\[0px_9px_21px_-4px_rgba\(23,28,41,0\.28\)\]': 'shadow-shadow-elevated',
    r'shadow-\[0px_4px_16px_-8px_rgba\(0,0,0,0\.22\)\]': 'shadow-shadow-floating',
    
    # White opacity variants
    r'bg-white/\[0\.06\]': 'bg-white/6',
    r'border-white/\[0\.06\]': 'border-white/6',
    r'bg-white/\[0\.03\]': 'bg-white/3',
    r'border-white/\[0\.08\]': 'border-white/8',
    r'border-white/\[0\.16\]': 'border-white/16',
}

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    for pattern, repl in replacements.items():
        new_content = re.sub(pattern, repl, new_content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith(('.tsx', '.ts')) and not ('Widget' in file or 'Block' in file):
            process_file(os.path.join(root, file))

process_file('index.html')
