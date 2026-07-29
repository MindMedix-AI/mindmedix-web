# Contributing to MindMedix AI

Thank you for your interest in contributing. As a healthcare AI company, we maintain high standards for code quality, security, and compliance.

## Code of Conduct

All contributors are expected to maintain professionalism and respect. We are building enterprise-grade healthcare infrastructure.

## How to Contribute

### Reporting Bugs
Open an issue using the **Bug Report** template. Include steps to reproduce, environment details, and screenshots if applicable.

### Suggesting Features
Open an issue using the **Feature Request** template. Explain the problem, your proposed solution, and the expected impact.

### Pull Requests

1. **Branch naming**: `feature/description`, `bugfix/description`, `hotfix/description`
2. **Commit messages**: Use conventional commits (`feat:`, `fix:`, `docs:`, `chore:`, `security:`)
3. **Before submitting**:
   - Ensure the build passes (`npm run build`)
   - Ensure lint passes (`npm run lint`)
   - Add tests for new functionality
4. **PR description**: Use the PR template and link related issues

### Development Workflow

```bash
npm install
npm run dev     # Local development at localhost:3000
npm run build   # Production build
npm run lint    # Code quality
```

## Code Standards

- TypeScript strict mode
- React functional components with hooks
- Tailwind CSS for styling
- WCAG 2.1 AA accessibility
- GDPR-compliant data handling

## Engineering Principles

- Security by Design
- Privacy by Design
- Responsible AI
- Accessibility
- Reliability
- Maintainability

## Questions?

Contact the core team at **core@mindmedixai.health**
