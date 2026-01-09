/**
 * 闪配宝官网交互脚本
 */

// ===== 导航栏滚动效果 =====
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScrollY = window.scrollY;
});

// ===== 移动端菜单 =====
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // 点击菜单项后关闭菜单
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// ===== 费用计算器 =====
function calculateFees() {
    const amount = parseFloat(document.getElementById('calc-amount').value) || 1000;
    const leverage = parseInt(document.getElementById('calc-leverage').value) || 10;
    const days = parseInt(document.getElementById('calc-days').value) || 1;
    const sellValue = parseFloat(document.getElementById('calc-sell').value) || 0;
    
    // 配资金额
    const totalAmount = amount * leverage;
    
    // 买入手续费 (万10)
    const buyFee = totalAmount * 0.001;
    
    // 过夜费 (万19/天)
    const interest = totalAmount * 0.0019 * days;
    
    // 卖出手续费 (万10)
    const sellFee = sellValue * 0.001;
    
    // 印花税 (万5)
    const tax = sellValue * 0.0005;
    
    // 总费用
    const totalFee = buyFee + interest + sellFee + tax;
    
    // 更新显示
    document.getElementById('result-total').textContent = formatNumber(totalAmount) + '元';
    document.getElementById('result-buy-fee').textContent = buyFee.toFixed(2) + '元';
    document.getElementById('result-days').textContent = days;
    document.getElementById('result-interest').textContent = interest.toFixed(2) + '元';
    document.getElementById('result-sell-fee').textContent = sellFee.toFixed(2) + '元';
    document.getElementById('result-tax').textContent = tax.toFixed(2) + '元';
    document.getElementById('result-total-fee').textContent = totalFee.toFixed(2) + '元';
}

// 数字格式化
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 初始化计算器
document.addEventListener('DOMContentLoaded', () => {
    const calcAmount = document.getElementById('calc-amount');
    const calcLeverage = document.getElementById('calc-leverage');
    const calcDays = document.getElementById('calc-days');
    const calcSell = document.getElementById('calc-sell');
    
    if (calcAmount) {
        // 监听输入变化实时计算
        [calcAmount, calcLeverage, calcDays, calcSell].forEach(el => {
            if (el) {
                el.addEventListener('input', calculateFees);
                el.addEventListener('change', calculateFees);
            }
        });
        
        // 初始计算
        calculateFees();
    }
});

// ===== FAQ 折叠功能 =====
function toggleFaq(button) {
    const faqItem = button.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // 关闭所有其他 FAQ
    document.querySelectorAll('.faq-item.active').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    // 切换当前 FAQ
    faqItem.classList.toggle('active');
}

// ===== 交易案例Tab切换 =====
function showCase(caseNum) {
    // 隐藏所有案例
    document.querySelectorAll('.case-content').forEach(content => {
        content.classList.add('hidden');
    });
    
    // 显示选中的案例
    const selectedCase = document.getElementById('case-' + caseNum);
    if (selectedCase) {
        selectedCase.classList.remove('hidden');
    }
    
    // 更新Tab状态
    document.querySelectorAll('.case-tab').forEach((tab, index) => {
        if (index === caseNum - 1) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

// ===== FAQ分类Tab切换 =====
function showFaqCategory(category) {
    // 隐藏所有分类
    document.querySelectorAll('.faq-category').forEach(content => {
        content.classList.add('hidden');
    });
    
    // 显示选中的分类
    const selectedCategory = document.getElementById('faq-' + category);
    if (selectedCategory) {
        selectedCategory.classList.remove('hidden');
        // 确保 FAQ 内容立即可见（重置任何可能的动画样式）
        selectedCategory.querySelectorAll('.faq-item').forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
    }
    
    // 更新Tab状态
    document.querySelectorAll('.faq-tab').forEach(tab => {
        if (tab.getAttribute('data-category') === category) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

// ===== 平滑滚动 =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== 滚动动画 =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有需要动画的元素（移除 faq-item，避免 FAQ 加载延迟）
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.feature-card, .advantage-card, .function-card, .step-card, .verify-card, .security-card'
    );
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
        observer.observe(el);
    });
});

// ===== 数字滚动动画 =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// 当数据展示区进入视口时启动动画
const statsSection = document.querySelector('[data-count]');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = document.querySelectorAll('[data-count]');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-count'));
                    animateCounter(counter, target);
                });
                statsObserver.disconnect();
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection.closest('section'));
}

// ===== 设备检测 =====
function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
        return 'ios';
    } else if (/android/.test(userAgent)) {
        return 'android';
    }
    return 'desktop';
}

// 根据设备高亮对应的下载按钮
document.addEventListener('DOMContentLoaded', () => {
    const device = detectDevice();
    // 可以根据设备类型做进一步处理
    console.log('检测到设备类型:', device);
});

// ===== 返回顶部 =====
// 可选：添加返回顶部按钮
function createBackToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.className = 'fixed bottom-8 right-8 w-12 h-12 bg-flash-orange text-white rounded-full shadow-lg opacity-0 invisible transition-all duration-300 hover:bg-energy-yellow hover:scale-110 z-50 text-xl font-bold';
    btn.id = 'back-to-top';
    document.body.appendChild(btn);
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.style.opacity = '1';
            btn.style.visibility = 'visible';
        } else {
            btn.style.opacity = '0';
            btn.style.visibility = 'hidden';
        }
    });
}

document.addEventListener('DOMContentLoaded', createBackToTop);

console.log('闪配宝官网脚本加载完成 ⚡');
