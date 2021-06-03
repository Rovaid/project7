let saleAdd = "0x2e276d7bE93a8D58ADc47CD8E2ee46B5Ec4Cdcfa";
let saleABI = [{ "inputs": [{ "internalType": "address", "name": "cert", "type": "address" }, { "internalType": "address", "name": "husd", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "userShare", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "husdAmount", "type": "uint256" }], "name": "Claimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Received", "type": "event" }, { "inputs": [], "name": "CERT", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "END", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "HUSD", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_PER_USER", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "START", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TOTAL_DISTRIBUTE_AMOUNT", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_husdAmt", "type": "uint256" }], "name": "buy", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "provided", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalProvided", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdrawProvidedHUSD", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdrawUnclaimedCERT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];

let tokenAdd = "0x351e676Bd62cd43BC6054B805065F539A2C30D34";
let tokenABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }];

let SALE_CONTRACT, T_CONTRACT, acc, metaMask, HUSDBalance, claimCounter,
    tokenPrice = 0.050;

let stage = 1,
    startDate = 1618388891, // 14 april
    endDate = 1619740799,
    nowDate = new Date().getTime() / 1000;

$(window).on('load', function() {
    // PAGE LOADER
    $('.pre-load').stop().animate({ opacity: 0 }, 500, function() {
        $('.pre-load').css({ 'display': 'none' });
        $('body').css({ 'overflow-y': 'auto' });
        animateBox();
    });
});

async function contractInitialization(address, ABI) {
    const web3Instance = new Web3(window['ethereum']);
    return (await new web3Instance.eth.Contract(ABI, address));
}

$(function() {
    $('.currentPrice').html(tokenPrice);
    // TOKEN contract
    contractInitialization(tokenAdd, tokenABI).then(C => {
        T_CONTRACT = C;

        T_CONTRACT.methods.balanceOf(saleAdd).call().then(balance => {
            $('.remainingCERT').html((convert(balance / 10 ** 18)).toFixed(3));
        });
    });

    // SALE contract
    contractInitialization(saleAdd, saleABI).then(C => {
        SALE_CONTRACT = C;
        SALE_CONTRACT.methods.END().call().then(enddate => {
            claimCounter = enddate;
            //updatePage();
        });

    });

    // MENU TOGGLE
    $('.mirror').click(function() {
        $('.navbar-collapse').removeClass('show');
    });

    $(window).scroll(function() {
        animateBox();

        if ($(this).scrollTop() > 100) {
            $('#mainNavbar').addClass('scrolled');
        } else {
            $('#mainNavbar').removeClass('scrolled');
        }
    });

    // TOOLTIP
    $('[data-toggle="tooltip"]').tooltip();


    // SMOOTH SCROLL
    $('.smooth-a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 75
        }, 1000);
        return false;
    });




    if (stage !== 1) {
        $('#stage1').addClass('d-none');

        if (startDate > nowDate) {
            $('#stage2-3').removeClass('d-none');
            $('#stage4').addClass('d-none');
            countDown(startDate);
            $('#stageTitle').html('Launchpad is alive In:');
        } else if (endDate > nowDate) {
            $('#stage2-3').removeClass('d-none');
            $('#stage4').addClass('d-none');
            countDown(endDate);
            $('#stageTitle').html('Distribution End In:');
        } else {
            $('#stage2-3').addClass('d-none');
            $('#stage4').removeClass('d-none');
        }
    }

    $('.connectMM').click(async function() {
        if (stage === 1 || stage === 2) {
            $('#connectModal').modal('show');
        } else {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            acc = await ethers.utils.getAddress(account);
            metaMask = true;

            let addressVal = acc;
            $('.connectMM').html(addressVal.substring(0, 6) + '...' + addressVal.substring(36, 42));

            $('.buy-overlay').addClass('d-none');
            $('.before-overlay').removeClass('blur');

            T_CONTRACT.methods.balanceOf(acc).call().then(balance => {
                HUSDBalance = balance;
                $('#ownedCERT').html(convert(balance / 10 ** 18).toFixed(3));
            });
        }
    });


    $('.show-wechat').slideUp(0);
    $('#wechatBtn').click(function(e) {
        e.preventDefault();
        $('.show-wechat').slideToggle();
    });


    let metaMask = false;
    if (metaMask) {
        $('.buy-overlay').addClass('d-none');
        $('.before-overlay').removeClass('blur');
    } else {
        $('.buy-overlay').removeClass('d-none');
        $('.before-overlay').addClass('blur');
    }


    $('#buyInput').keyup(function() {
        let approveValue;
        if ($(this).val() > 0 && $(this).val() !== '') {
            T_CONTRACT.methods.allowance(acc, saleAdd).call().then(allowance => {
                approveValue = allowance;
                approveValue = approveValue / 10 ** 18;
                if ($(this).val() < approveValue) {
                    // Enable the Buy button
                    $('#approveInvestBtn').attr('disabled', '').addClass('d-none');
                    $('#buyBtn').removeAttr('disabled');
                } else {
                    // Show Approve button
                    $('#approveInvestBtn').removeAttr('disabled').removeClass('d-none');
                    $('#buyBtn').attr('disabled', '');
                }
            });
        } else {
            $('#approveInvestBtn').attr('disabled', '').addClass('d-none');
            $('#buyBtn').attr('disabled', '');
        }
    });

    $('#approveInvestBtn').click(function(e) {
        e.preventDefault();
        T_CONTRACT.methods.approve(saleAdd, HUSDBalance).send({
            from: acc,
            gasLimit: 200000,
            gasPrice: 21000000000 //21 Gwei
        }).on('transactionHash', function(hash) {
            $(this).attr('disabled', '');
            $(this).find('.before-click').addClass('d-none');
            $(this).find('.after-click').removeClass('d-none');
        }).on('confirmation', function(confirmationNumber, receipt) {
            $('#approveInvestBtn').find('.after-click').addClass('d-none');
            $('#approveInvestBtn').find('.before-click').removeClass('d-none');
            $('#approveInvestBtn').addClass('d-none');
            $('#buyBtn').removeAttr('disabled');
        });
    });

    $('#buyBtn').click(function(e) {
        e.preventDefault();
        let formVals = $('#buyInput').val();
        formVals = (convert(formVals * 10 ** 18)).toString();
        SALE_CONTRACT.methods.buy(formVals).send({
            from: acc,
            gasLimit: 200000,
            gasPrice: 21000000000 //21 Gwei
        }).on('transactionHash', function(hash) {
            $(this).attr('disabled', '');
            $(this).find('.before-click').addClass('d-none');
            $(this).find('.after-click').removeClass('d-none');
        }).on('confirmation', function(confirmationNumber, receipt) {
            $('#buyBtn').find('.after-click').addClass('d-none');
            $('#buyBtn').find('.before-click').removeClass('d-none');
            $('#buyBtn').removeAttr('disabled');
        });
    });




    $('#modalInput').keyup(function() {
        let approveValue;
        if ($(this).val() > 0 && $(this).val() !== '') {
            T_CONTRACT.methods.allowance(acc, saleAdd).call().then(allowance => {
                approveValue = allowance;
                approveValue = approveValue / 10 ** 18;
                if ($(this).val() < approveValue) {
                    // Enable the Purchase button
                    $('#approveModalBtn').attr('disabled', '').addClass('d-none');
                    $('#purchaseModalBtn').removeAttr('disabled');
                } else {
                    // Show Approve button
                    $('#approveModalBtn').removeAttr('disabled').removeClass('d-none');
                    $('#purchaseModalBtn').attr('disabled', '');
                }
            });
        } else {
            $('#approveModalBtn').attr('disabled', '').addClass('d-none');
            $('#purchaseModalBtn').attr('disabled', '');
        }
    });

    $('#approveModalBtn').click(function(e) {
        e.preventDefault();
        T_CONTRACT.methods.approve(saleAdd, HUSDBalance).send({
            from: acc,
            gasLimit: 200000,
            gasPrice: 21000000000 //21 Gwei
        }).on('transactionHash', function(hash) {
            $(this).attr('disabled', '');
            $(this).find('.before-click').addClass('d-none');
            $(this).find('.after-click').removeClass('d-none');
        }).on('confirmation', function(confirmationNumber, receipt) {
            $('#approveModalBtn').find('.after-click').addClass('d-none');
            $('#approveModalBtn').find('.after-approve').removeClass('d-none');
            $('#purchaseModalBtn').removeAttr('disabled');
        });
    });

    $('#purchaseModalBtn').click(function(e) {
        e.preventDefault();
        let formVals = $('#modalInput').val();
        formVals = (convert(formVals * 10 ** 18)).toString();
        SALE_CONTRACT.methods.buy(formVals).send({
            from: acc,
            gasLimit: 200000,
            gasPrice: 21000000000 //21 Gwei
        }).on('transactionHash', function(hash) {
            $(this).attr('disabled', '');
            $(this).find('.before-click').addClass('d-none');
            $(this).find('.after-click').removeClass('d-none');
        }).on('confirmation', function(confirmationNumber, receipt) {
            $('#purchaseModalBtn').find('.before-click').removeClass('d-none');
            $('#purchaseModalBtn').find('.after-click').addClass('d-none');
            $('#buyModal').modal('hide');
        });
    });
});

function convert(n) {
    var sign = +n < 0 ? "-" : "",
        toStr = n.toString();
    if (!/e/i.test(toStr)) {
        return n;
    }
    var [lead, decimal, pow] = n.toString()
        .replace(/^-/, "")
        .replace(/^([0-9]+)(e.*)/, "$1.$2")
        .split(/e|\./);
    return +pow < 0 ?
        sign + "0." + "0".repeat(Math.max(Math.abs(pow) - 1 || 0, 0)) + lead + decimal :
        sign + lead + (+pow >= decimal.length ? (decimal + "0".repeat(Math.max(+pow - decimal.length || 0, 0))) : (decimal.slice(0, +pow) + "." + decimal.slice(+pow)))
}

function animateBox() {
    let scrollVar = $(document).scrollTop();

    $('.animate-box').each(function() {
        let boxVal = $(this).offset().top - $(window).height() + 50;

        if (scrollVar > boxVal) {
            if (!$(this).hasClass('animated')) {

                if ($(this).hasClass('left-in')) {
                    $(this).addClass('animated fadeInLeft');
                } else if ($(this).hasClass('right-in')) {
                    $(this).addClass('animated fadeInRight');
                } else {
                    $(this).addClass('animated fadeInUp');
                }

            }
        }
    });
}

// COUNTDOWN

function countDown(dateVal) {
    $('.countdown').each(function() {
        let thisCount = $(this);

        let x = setInterval(function() {

            let distance = parseInt(dateVal) - new Date().getTime() / 1000;

            let days = Math.floor(distance / (3600 * 24));
            let hours = Math.floor(distance % (3600 * 24) / 3600);
            let minutes = Math.floor(distance % 3600 / 60);
            let seconds = Math.floor(distance % 60);

            if (days > 0)
                thisCount.find('.counter-holder .day').html(days);
            else
                thisCount.find('.counter-holder .day').html('00');
            if (hours > 0)
                thisCount.find('.counter-holder .hours').html(hours);
            else
                thisCount.find('.counter-holder .hours').html('00');
            if (minutes > 0)
                thisCount.find('.counter-holder .minutes').html(minutes);
            else
                thisCount.find('.counter-holder .minutes').html('00');
            if (seconds > 0)
                thisCount.find('.counter-holder .seconds').html(seconds);
            else
                thisCount.find('.counter-holder .seconds').html('00');

            if (distance < 0) {
                clearInterval(x);
                $('#connectWallet').removeClass('d-none');
            }
        }, 1000);
    });
}