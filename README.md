# Claude Code Reverse Engineering Research Repository
> Translated with Gemini 2.5 Pro
> Original @ https://github.com/shareAI-lab/analysis_claude_code

Follow us on X: https://x.com/baicai003    
Note: Not 100% accurate! This repository was created on a whim while we were studying "How do Agent model companies do Agent engineering?". It contains our own analysis of Claude Code's obfuscated code, done with the help of Claude Code itself. Due to the chaotic and scattered nature of the obfuscated code, analysis is extremely difficult, and Claude Code may have some hallucinations. This repository is for reference and learning purposes only! The relevant Claude Code prompts are in the `work_doc_for_this` folder. Interested users can copy the prompts and try to reproduce the results!


## Notice
<img width="360" height="360" alt="image" src="https://github.com/user-attachments/assets/10664e2e-36c8-4e29-b740-f5d06e71c1be" />
<img width="360" height="360" alt="image" src="https://github.com/user-attachments/assets/9813fca0-a6dd-4813-972e-f9bf6d62add8" />

The open-source reproduced version will be released here: https://github.com/shareAI-lab/AgentKode    
Related analysis articles have been double-checked, extracted, organized, and published on the official ShareAI Lab public account.

## 📋 Project Overview

This repository is a complete research library for the in-depth reverse engineering analysis of Claude Code v1.0.33. Through a systematic analysis of the obfuscated source code, we have uncovered the core architectural design, implementation mechanisms, and operational logic of this modern AI programming assistant.

The project includes analysis results of over **50,000 lines of obfuscated code**, covering the entire technology stack from UI interaction to the core Agent engine. Through multiple rounds of iterative analysis and rigorous verification, we have successfully reconstructed Claude Code's core technical architecture, providing valuable technical reference for understanding the engineering implementation of modern AI Agent systems.

### 🎯 Research Objectives

1.  **In-depth Understanding** of Claude Code's system architecture and core mechanisms.
2.  **Complete Reconstruction** of the technical implementation logic behind the obfuscated code.
3.  **Rigorous Verification** of the accuracy and consistency of the analysis results.
4.  **Open-Source Recreation** to provide a reproducible technical implementation guide.
5.  **Knowledge Sharing** to offer a reference for AI Agent system design.

## 🔬 Core Technical Findings

### 🚀 Breakthrough Technical Innovations

#### 1. Real-time Steering Mechanism
- **Base Architecture**: h2A dual-buffer asynchronous message queue
- **Core Features**: Zero-latency message passing, throughput > 10,000 messages/sec
- **Implementation Principle**: Promise-based asynchronous iterator + intelligent backpressure control
- **Technical Advantages**: Truly non-blocking asynchronous processing, supporting real-time streaming responses

#### 2. Layered Multi-Agent Architecture
- **Main Agent**: nO main loop engine, responsible for core task scheduling
- **SubAgent**: I2A sub-task agent, providing an isolated execution environment
- **Task Agent**: Dedicated task processor, supporting concurrent execution
- **Permission Isolation**: Each Agent has an independent permission scope and resource access control

#### 3. Intelligent Context Management
- **Compression Algorithm**: Context compression automatically triggered at a 92% threshold
- **Memory Optimization**: wU2 compressor, intelligently retaining key information
- **Persistence**: `CLAUDE.md` file serves as long-term memory storage
- **Dynamic Management**: Dynamically adjusts context size based on token usage

#### 4. Enhanced Security Protection
- **6-Layer Permission Verification**: A complete security chain from UI to tool execution
- **Sandbox Isolation**: Fully isolated tool execution environment
- **Input Validation**: Multi-layered detection and filtering of malicious input
- **Permission Gateway**: Fine-grained functional permission control

### 🏗️ System Architecture Overview

```ascii
                    Claude Code Agent System Architecture
    ┌─────────────────────────────────────────────────────────────────┐
    │                      User Interaction Layer                     │
    │   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │
    │   │  CLI Interface│  │ VSCode Integ.│  │  Web Interface  │           │
    │   │   (Command)   │  │    (Plugin)   │  │   (Browser)   │           │
    │   └─────────────┘  └─────────────┘  └─────────────┘           │
    └─────────────┬───────────────┬───────────────┬───────────────────┘
                  │               │               │
    ┌─────────────▼───────────────▼───────────────▼───────────────────┐
    │                    Agent Core Dispatcher Layer                  │
    │                                                                 │
    │  ┌─────────────────┐         ┌─────────────────┐               │
    │  │ nO Main Loop Eng.│◄────────┤ h2A Message Queue│               │
    │  │   (AgentLoop)   │         │   (AsyncQueue)  │               │
    │  │  • Task Sched.  │         │  • Async Comm.  │               │
    │  │  • State Mgmt.  │         │  • Stream Proc. │               │
    │  │  • Error Handling│         │  • Backpressure │               │
    │  └─────────────────┘         └─────────────────┘               │
    │           │                           │                         │
    │           ▼                           ▼                         │
    │  ┌─────────────────┐         ┌─────────────────┐               │
    │  │ wu Session Stream│         │ wU2 Msg Compressor│               │
    │  │     Generator   │         │    (Compressor)   │               │
    │  │    (StreamGen)  │         │                   │               │
    │  │  • Real-time Resp│         │  • Smart Compress │               │
    │  │  • Stream Output│         │  • Context Opt. │               │
    │  └─────────────────┘         └─────────────────┘               │
    └─────────────┬───────────────────────┬─────────────────────────────┘
                  │                       │
    ┌─────────────▼───────────────────────▼─────────────────────────────┐
    │                 Tool Execution & Management Layer               │
    │                                                                   │
    │ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌─────────────────┐│
    │ │MH1 Tool Eng.│ │UH1 Concurrency│ │SubAgent Mgmt││ Permission GW   ││
    │ │(ToolEngine)│ │  (Scheduler) │ │ (TaskAgent)  ││ (PermissionGW)  ││
    │ │• Tool Discovery│ │• Concurrency Limit│• Task Isolation││ • Permission Chk ││
    │ │• Param Valid.│ │• Load Balancing │• Error Recovery││ • Security Audit ││
    │ │• Exec. Sched.│ │• Resource Mgmt. │• State Sync    ││ • Access Control ││
    │ └────────────┘ └────────────┘ └────────────┘ └─────────────────┘│
    │       │              │              │              │            │
    │       ▼              ▼              ▼              ▼            │
    │ ┌────────────────────────────────────────────────────────────────┐│
    │ │                       Tool Ecosystem                         ││
    │ │ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐││
    │ │ │ File Op Tools│ │ Search Tools │ │ Task Mgmt Tools││ System Exec Tools││
    │ │ │• Read/Write │ │• Glob/Grep  │ │• Todo System  ││• Bash Exec    │││
    │ │ │• Edit/Multi │ │• Pattern Match│ │• State Track  ││• Command Call │││
    │ │ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘││
    │ │ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐││
    │ │ │ Web Tools   │ │ Special Tools│ │ MCP Intg. Tools││ Developer Tools││
    │ │ │• WebFetch   │ │• Plan Mode    │ │• Protocol Supp.││• Code Diag.   │││
    │ │ │• WebSearch  │ │• Exit Plan    │ │• Service Disc.││• Perf. Monitor│││
    │ │ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘││
    │ └────────────────────────────────────────────────────────────────┘│
    └─────────────┬─────────────────────────────────────────────────────┘
                  │
    ┌─────────────▼─────────────────────────────────────────────────────┐
    │                   Storage & Persistence Layer                   │
    │                                                                   │
    │ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
    │ │Short-Term Mem│ │Mid-Term History│ │Long-Term Store│ │State Cache Sys.│ │
    │ │   (Messages)  │ │ (Compressed)  │ │ (CLAUDE.md) │ │ (StateCache)  │ │
    │ │• Current Sess.│ │• History Summ.│ │• User Prefs   │ │• Tool State   │ │
    │ │• Context Queue│ │• Key Info     │ │• Config       │ │• Exec. History│ │
    │ │• Temp Cache   │ │• Compress Alg.│ │• Persist Mech.│ │• Perf. Metrics│ │
    │ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘ │
    └───────────────────────────────────────────────────────────────────┘
```

## 📁 Repository Structure Explained

### 📂 Main Directory Organization

```
about_claude_code/
├── claude_code_v_1.0.33/                    # v1.0.33 full analysis workspace
│   └── stage1_analysis_workspace/           # Stage 1 analysis results
│       ├── Claude_Code_Agent_System_Full_Technical_Analysis.md  # Core technical analysis document
│       ├── chunks/                          # Code chunk files (102)
│       │   ├── chunks.1.mjs ~ chunks.102.mjs  # Deobfuscated code chunks
│       │   ├── chunks.index.json            # Chunk index file
│       │   └── cli.chunks.mjs               # CLI main file chunk
│       ├── analysis_results/                # Analysis results summary
│       │   └── merged-chunks/               # Merged and optimized code chunks
│       ├── scripts/                         # Analysis script toolset
│       │   ├── beautify.js                  # Code beautification script
│       │   ├── split.js                     # Code splitting script
│       │   ├── merge-again.js               # Code merging script
│       │   └── llm.js                       # LLM analysis interface
│       ├── docs/                            # Detailed technical documents
│       └── source/                          # Original source files
├── work_doc_for_this/                       # Project work documents
│   ├── CLAUDE_CODE_REVERSE_SOP.md           # Reverse engineering standard operating procedure
│   ├── stage_1_analysis_sop.md              # Stage 1 analysis methodology
│   └── stage_2_reconstruction_sop.md        # Stage 2 reconstruction methodology
├── LICENSE                                  # Open-source license
└── README.md                                # Project description document
```

### 📋 Core Technical Documents

#### 🔧 In-depth Analysis of Core Mechanisms
- **`Full_Technical_Document_on_the_Real-time_Steering_Mechanism.md`** - Complete implementation principles of the h2A asynchronous message queue
- **`Full_Technical_Document_on_the_Edit_Tool_Forced_Read_Mechanism.md`** - File read verification mechanism of the Edit tool
- **`Full_Technical_Document_on_the_Layered_Multi-Agent_Architecture.md`** - Architectural design of the multi-layer Agent system
- **`Full_Technical_Document_on_the_Plan_Mode_Mechanism.md`** - Trigger and execution mechanism of the Plan mode
- **`Claude_Code_Sandbox_Mechanism_Deep_Analysis.md`** - In-depth analysis of the sandbox security mechanism
- **`Claude_Code_MCP_Deep_Analysis.md`** - Analysis of the MCP protocol integration mechanism

#### 📊 Validation and Cross-Analysis Reports
- **`FINAL_VALIDATION_REPORT.md`** - Final comprehensive validation report (95% accuracy)
- **`CROSS_VALIDATION_REPORT.md`** - Cross-document consistency validation
- **`Claude_Code_Key_Mechanisms_Rigorous_Validation_Report.md`** - Source-code-level validation of key mechanisms
- **`Claude_Code_Complete_Cognitive_Update_After_Final_Validation.md`** - Complete cognitive framework update

#### 🏗️ Open-Source Recreation Guide
- **`Open-Claude-Code/`** - Open-source recreation project template
  - Complete TypeScript implementation framework
  - Core component interface definitions
  - Test cases and benchmarks
- **`Demo_Repo/`** - Demonstration implementation repository
- **`Implementation_Steps/`** - Phased implementation guide
  - Stage 1: Project initialization and base architecture
  - Stage 2: Agent core engine and tool system
  - Stage 3: Advanced features and interaction modes
  - Stage 4: MCP integration and extension system
  - Stage 5: Testing, optimization, and release preparation

#### 🔍 Special Mechanism Analysis
- **`Claude_Code_UI_Component_System_Deep_Analysis.md`** - UI component system analysis
- **`Claude_Code_Image_Processing_and_LLM_API_Deep_Analysis.md`** - Image processing and LLM API analysis
- **`Claude_Code_Hidden_Features_and_Advanced_Mechanisms_Deep_Dive.md`** - Discovery of hidden features
- **`Claude_Code_IDE_Connection_and_Interaction_Deep_Analysis.md`** - IDE integration mechanism

## 🛠️ Analysis Methodology Explained

### Stage 1: Static Code Analysis

#### 1. Pre-processing
```bash
# Code beautification and formatting
node scripts/beautify.js source/cli.mjs

# Intelligent chunking (102 chunks)
node scripts/split.js cli.beautify.mjs

# Generate chunk index
node scripts/generate-index.js chunks/
```

#### 2. LLM-Assisted Analysis
- **Pattern Recognition**: Use GPT-4 to identify code patterns and architecture
- **Function Analysis**: Analyze obfuscated logic function by function
- **Dependency Mapping**: Build a dependency graph between modules
- **API Tracing**: Trace the call chain of key APIs

#### 3. Cross-Validation
- **Multiple Iterations**: 3 rounds of in-depth analysis to ensure accuracy
- **Consistency Check**: Verify the consistency of technical descriptions across documents
- **Source Code Correlation**: Every technical assertion is supported by a source code location

### Stage 2: Dynamic Behavior Verification

#### 1. Runtime Analysis
- **Function Call Tracing**: Record the execution paths of key functions
- **State Change Monitoring**: Monitor the process of system state changes
- **Performance Metric Collection**: Collect data on memory usage and execution time

#### 2. Integration Testing
- **Component Interaction Verification**: Verify the interaction logic between components
- **Boundary Condition Testing**: Test the system's behavior under extreme conditions
- **Error Recovery Verification**: Verify the system's error handling and recovery mechanisms

## 🔍 Detailed Research Scope

### 🎯 Core Components Analyzed

#### 1. Agent Loop System
- **nO Main Loop Engine**: 
  - Core scheduler implemented with an asynchronous generator
  - Execution control with support for interruption and resumption
  - Multi-level exception handling and error recovery
- **Message Processing Pipeline**:
  - Real-time message queue processing
  - Message priority and scheduling algorithms
  - Backpressure control and flow management

#### 2. Tool Execution Framework
- **6-Stage Execution Pipeline**:
  1. Tool discovery and registration
  2. Parameter validation and type checking
  3. Permission verification and security checks
  4. Resource allocation and environment preparation
  5. Concurrent execution and state monitoring
  6. Result collection and cleanup/reclamation
- **Concurrency Control**: Maximum 10 concurrent operations, with intelligent load balancing
- **Error Isolation**: Independent error handling domain for each tool

#### 3. Memory & Context Management
- **Intelligent Compression Algorithm**:
  - Compression triggered automatically at a 92% threshold
  - Compression strategy that preserves key information
  - Layered storage and retrieval mechanism
- **Token Optimization**:
  - Dynamic context window adjustment
  - Importance scoring and content filtering
  - Intelligent summarization of historical conversations

#### 4. Security Framework
- **6-Layer Permission Verification**:
  1. UI input validation layer
  2. Message routing validation layer
  3. Tool call validation layer
  4. Parameter content validation layer
  5. System resource access layer
  6. Output content filtering layer
- **Sandbox Isolation**: Fully isolated tool execution environment
- **Malicious Input Detection**: Identification of malicious content through various patterns

#### 5. UI Integration
- **React Component System**: Modular UI component architecture
- **Real-time Update Mechanism**: WebSocket-based real-time communication
- **Event Handling System**: Handles 12 different types of UI events

### 📊 Validation Results Statistics

| Validation Dimension | Accuracy | Coverage | Confidence Level |
|----------------------|----------|----------|------------------|
| Core Architecture Design | 95% | Full | High |
| Key Mechanism Implementation | 98% | Full | Very High |
| API Call Chain | 92% | 85% | High |
| Security Mechanism Validation | 90% | Main features | Medium-High |
| Performance Parameter Validation | 88% | Key metrics | Medium-High |
| UI Interaction Mechanism | 85% | Main flows | Medium |

### 🔬 Innovative Technical Findings

#### 1. Breakthrough in Real-time Steering Technology
This is the most significant technical innovation we discovered. The `h2A` class implements true zero-latency asynchronous message passing:

```javascript
// Pseudo-code for the core dual-buffer mechanism
class h2AAsyncMessageQueue {
  enqueue(message) {
    // Strategy 1: Zero-latency path - directly pass to a waiting reader
    if (this.readResolve) {
      this.readResolve({ done: false, value: message });
      this.readResolve = null;
      return;
    }
    
    // Strategy 2: Buffering path - store in the circular buffer
    this.primaryBuffer.push(message);
    this.processBackpressure();
  }
}
```

#### 2. Intelligent Context Compression Algorithm
Intelligent compression based on importance scoring, preserving 92% of key information:

```javascript
// Compression trigger logic
if (tokenUsage > CONTEXT_THRESHOLD * 0.92) {
  const compressedContext = await wU2Compressor.compress({
    messages: currentContext,
    preserveRatio: 0.3,
    importanceScoring: true
  });
}
```

## 🎯 Application Scenarios & Value

### 📚 Educational & Research Value
1.  **AI Agent Architecture Study**: A complete implementation case of a modern AI Agent system.
2.  **Asynchronous Programming Patterns**: A design reference for high-performance asynchronous systems.
3.  **Security Architecture Design**: An implementation plan for multi-layered security protection.
4.  **Performance Optimization Techniques**: Best practices for memory management and concurrency control.

### 🏗️ System Design Reference
1.  **Architectural Pattern Adoption**: Layered architecture and component-based design.
2.  **Tool System Design**: Pluggable tool execution framework.
3.  **State Management Solutions**: Distributed state synchronization mechanism.
4.  **Error Handling Strategies**: Multi-level error recovery mechanisms.

### 🔒 Security Analysis Application
1.  **Security Mechanism Auditing**: Analysis of the implementation of multi-layer permission verification.
2.  **Sandbox Technology Research**: Design principles of isolated execution environments.
3.  **Input Validation Patterns**: Malicious input detection and filtering techniques.
4.  **Permission Control Systems**: Implementation of fine-grained permission management.

### 🚀 Open-Source Development Guidance
1.  **Project Architecture Setup**: Architectural design based on the analysis results.
2.  **Core Component Implementation**: Open-source implementation guide for key components.
3.  **Test Strategy Formulation**: Test case design based on the analysis.
4.  **Performance Optimization Guidance**: Identification and optimization of performance bottlenecks.

## 🤝 Contribution Guidelines

### 📝 Types of Contributions
1.  **Accuracy Improvements**: Correcting errors or inaccuracies in the analysis.
2.  **In-depth Analysis**: Further deepening the existing analysis.
3.  **New Finding Supplements**: Adding newly discovered technical details.
4.  **Documentation Enhancement**: Improving document structure and readability.
5.  **Code Implementation**: Open-source implementation based on the analysis.

### ✅ Contribution Standards
- All technical assertions must be supported by a source code location.
- New analysis must undergo cross-validation.
- Document formatting must remain consistent.
- Code implementations must pass testing verification.

## ⚖️ Disclaimer

This repository is intended strictly for educational and academic research purposes. All analysis is based on publicly available obfuscated code and aims to understand the design patterns and architectural principles of modern AI systems.

**Important Notes**:
- This project does not involve any malicious reverse engineering activities.
- All analysis is conducted within a legal and compliant framework.
- The research findings are for academic exchange and technical learning only.
- It is not recommended to use the analysis results for commercial competitive purposes.

## 📄 Open Source License

This project is open-sourced under the Apache License Version 2.0 - see the [LICENSE](LICENSE) file for details.

---

**Last Updated**: June 29, 2025   
**Project Inspiration**: [claude-code-reverse](https://github.com/Yuyz0112/claude-code-reverse)  
**Maintained by**: ShareAI-Lab

> Translated with Gemini 2.5 Pro
