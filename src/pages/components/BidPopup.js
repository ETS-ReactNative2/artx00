import React, { Component }  from 'react';
import ReferLink from '../atoms/ReferLink';
import BidInputBtn from './BidInputBtn';
import ShareTo from '../atoms/ShareTo';
import Info from '../atoms/Info';
import eth from '../../styles/assets/ethereum.svg';
import '../../styles/scss/popup.scss';

export default class Popup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          //??should these be props or states??
          referred: true,
          sharePrice: 1.25,
          average: 5,
          maximum: 1000,
          quickIn: '',
          //inside component
          step: 1,
          isOpen: false,
          amount: null
        };

        this.bidSteps = this.bidSteps.bind(this);
        this.closeBid = this.closeBid.bind(this);
        this.setStep = this.setStep.bind(this);
        this.quickInput = this.quickInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    quickInput(num) {
        if (isNaN(num) === false) {
            this.setState({value: num});
            this.setState({amount: this.state.sharePrice * num});
        } 
        if (num === 'ave') {
            this.setState({value: this.state.average});
            this.setState({amount: this.state.sharePrice * this.state.average});
        } 
        if (num === 'max') {
            this.setState({value: this.state.maximum});
            this.setState({amount: this.state.sharePrice * this.state.maximum});
        } 
        
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.setState({amount: this.state.sharePrice * event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
    }

    bidSteps(s, b) {
        switch(s) {
            case 1:
                return (
                    <div className='mx-auto'>
                        <p className='artx-type-tw text-center text-warning'>Please login to your Metamask first</p>
                        <p className='artx-type-et text-center artx-gradient-text mb-4 position-relative'>Bid <i>Genesis</i> shares earlier and earn more dividends! <Info content='Players earn dividends from the auction by bidding and buying shares of Genesis. The price of each share will increase slowly over time. The earlier you bid, the more dividends you earn!'/></p>
                        <div className='text-center mb-4 '>
                            <input className='artx-bid-input artx-type-et text-white mr-2 pl-2 text-center' type='number' id='artxShares' value={this.state.value} onChange={this.handleChange}/>
                            <label className='artx-type-twf text-white' htmlFor='artxShares'>Shares = <span>{this.state.amount}</span><img className='artx-eth-s align-baseline ml-2' src={eth} alt='ethereum icon'/></label>
                        </div>
                        <div className='artx-shares-btn text-center amb-9'>
                            <BidInputBtn label='1X' inputShares={() => this.quickInput(1)}/>
                            <BidInputBtn label='10X' inputShares={() => this.quickInput(10)}/>
                            <BidInputBtn label='100X' inputShares={() => this.quickInput(100)}/>
                            <BidInputBtn label='AVE' inputShares={() => this.quickInput('ave')}/>
                            <BidInputBtn label='MAX' inputShares={() => this.quickInput('max')}/>
                        </div>
                        <button className="d-block mx-auto artx-btn artx-type-et text-center text-white py-2 apx-13" type='button' onClick={() => this.setStep(1)}>Next</button>
                    </div>
                );
            case 2:
                    return (
                        <div className='mx-auto artx-bid-content'>
                            <p className='artx-type-twf text-white text-center'>23223 Shares = 0.2348 <img className='artx-eth-s align-text-bottom ml-2' src={eth} alt='ethereum icon'/></p>
                            <p className='artx-type-et artx-gradient-text amt-8 mb-1'>Now, guess the final hammer price of <i>Genesis</i>!</p>
                            <p className='artx-type-et artx-gradient-text amb-8'>The top 3 most accurate appraisers will win the <b>Appraisal Jackpot</b>!</p>
                            <div className='text-center amb-18'>
                                <label className='artx-type-twf text-white mb-1' htmlFor='artxA'>Your Appraisal</label>
                                <input className='artx-bid-input artx-type-et text-white ml-2 pl-2' type='number' id='artxA' aria-describedby='artxAU'/>
                                <img className='artx-eth-s align-text-bottom ml-2' src={eth} alt='ethereum icon'/>
                            </div>
                            <button className="d-block mx-auto artx-btn artx-type-et text-center text-white py-2 apx-13" type='button' onClick={() => this.setStep(1)}>Next</button>  
                        </div>
                    );
            case 3:
                if (b === true) {
                    return (
                        <div className='mx-auto artx-bid-content'>
                            <p className='artx-type-twf text-white text-center'><span className='artx-type-et'>You're buying</span> <span>23223</span> Shares = <span>0.2348</span> <img className='artx-eth-s align-text-bottom ml-2' src={eth} alt='ethereum icon'/></p>
                            <p className='artx-type-twf text-white text-center'><span className='artx-type-et'>Your Appraisal is</span> <span>12573</span><img className='artx-eth-s align-text-bottom ml-2' src={eth} alt='ethereum icon'/></p>
                            <p className='artx-type-tw artx-gradient-text mb-4'>Good news! You will receive a 10% bonus because you are referred by a friend!</p>
                            <p className='artx-type-tw text-center text-warning amb-8'>NOTICE:  Login to Metamask to try again!</p>
                            <button className="d-block mx-auto artx-btn artx-type-et text-center text-white py-2 apx-13" type='button' onClick={() => this.setStep(1)}>BID</button>
                        </div>
                    );
                } else {
                    return (
                        <div className='mx-auto artx-bid-content'>
                            <p className='artx-type-et artx-gradient-text mb-1'>Last step!</p>
                            <p className='artx-type-et artx-gradient-text mb-3'>If someone refered you, please enter their referral link to receive a 10% ETH bonus!<Info content='You can use other people’s  referral link. Both of you will receive 10%  of the referral’s purchase as bonus.'/></p>
                            <div className='mb-3'>
                                <label className='artx-type-et text-white' htmlFor='artxRLFI'>Referral Link</label>
                                <input className='artx-bid-input-s artx-type-st text-white mx-2' id='artxRLFI' aria-describedby='artxRFLIO'/>
                                <span className='artx-type-et text-white' id='artxRFLIO'>(Optional)</span>
                            </div>
                            <p className='text-center artx-type-tw text-warning amb-8'>NOTICE:  Login to Metamask to try again!</p>
                            <button className='d-block mx-auto artx-btn artx-type-et text-center text-white py-2 apx-13' type='button' onClick={() => this.setStep(1)}>Bid</button>
                        </div>
                    );
                }
            case 4:
                return (
                    <div className='mx-auto'>
                        <h3 className='text-center artx-type-ths artx-gradient-text mb-2'>Congratulations!</h3>
                        <p className='text-center artx-type-st text-white mb-1'>Your bid has been submitted to blockchain.</p>
                        <p className='text-center artx-type-st text-white amb-8'>Check <b>Personal Account</b> to see your status anytime!</p>
                        <p className='text-center artx-type-st artx-gradient-text mb-1 position-relative'>Here is your <b>Personal Referral Link</b>.<Info content='You can use your personal referral link to recruit other people to the auction. Both of you will receive 10%  of the referral’s purchase as bonus.'/></p>
                        <p className='text-center artx-type-st artx-gradient-text mb-1'>Share it with friends and win 10% of their bids!</p>
                        <p className='text-center artx-type-st artx-gradient-text'>The more you refer, the more you earn!</p>
                        <div className='d-flex justify-content-center amb-9'>
                            <ReferLink link='uadsfafadf' account='false'/>
                            <ShareTo/>
                        </div>
                        <div className='text-center'>
                            <label className='artx-type-st text-white mb-4' htmlFor='subscribeEmail'>Enter your email to receive ARTX airdrop invitations and auction game updates!</label>
                        </div>
                        <div className='artx-subscribe-input mx-auto amb-8'>
                            <input className='artx-type-et py-3 pl-4 text-white border-0' type='email' id='subscribeEmail' placeholder='Email'/>
                        </div>
                        <button type='button' className='d-block mx-auto artx-btn artx-type-et text-center text-white py-2 apx-13' onClick={this.closeBid}>Finish</button>
                    </div>
                )
            default:
                return null;
        }
    }

    closeBid() {
        this.setState({isOpen: false, step: 1});
    }

    setStep(num) {
        this.setState(prevState => ({step: prevState.step + num}));
    }

    render() {
        const endsStep = this.state.step === 1 || this.state.step === 4 ? true : false; 
        const progBarWidth = this.state.step === 4
        ? { width: '0px'}
        : { width: (1 - this.state.step/3) * 100 + '%' };
        const {referred, step, isOpen} = this.state;
        return (
            <div>
                <button className='d-block ml-auto artx-btn text-white artx-type-tw py-3 apx-14' onClick={() => this.setState({isOpen: true})}>BID</button>
                { isOpen
                ? <div className='artx-bid-container position-absolute mx-auto artx-gradient-outter'>
                    <div className='artx-progress-bar ml-auto' style={progBarWidth}></div>
                    <div className='artx-gradient-inner pt-4 apb-14 w-100'>
                        {
                            endsStep
                            ?
                                <button type="button" className="d-block ml-auto amr-9 artx-icon-btn" aria-label="Close" onClick={this.closeBid}>
                                    <i className="fas fa-times artx-type-tw artx-gradient-text"></i>
                                </button>
                            : <div className='d-flex justify-content-between amx-9'>
                                <button type="button" className='artx-icon-btn' aria-label='Go back to previous step' onClick={() => this.setStep(-1)}>
                                    <i className="artx-type-tw fas fa-chevron-left artx-gradient-text"></i>
                                </button>
                                <button type="button" className="artx-icon-btn" aria-label="Close" onClick={this.closeBid}>
                                    <i className="fas fa-times artx-type-tw artx-gradient-text"></i>
                                </button>
                            </div>
                        }
                        <form>
                            {this.bidSteps(step, referred)}
                        </form>
                    </div>
                  </div>
                : null}
            </div>
        )
    }; 
};