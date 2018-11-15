// TODO: look into only using kyberTokenInfoList for ETH and parsing results differently if ROP?
const kyberTokenList = {
  ETH: 'https://tracker.kyber.network/api/tokens/supported',
  ROP: 'https://tracker.kyber.network/api/tokens/supported?chain=ropsten'
};

const kyberTokenInfoList = {
  ETH: 'https://tracker.kyber.network/api/tokens/pairs'
};

const walletDepositeAddress = '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D'; // i.e. where payments go
const kyberNetworkENS = 'kybernetwork.eth';
const kyberValidNetworks = ['ETH', 'ROP'];

const defaultValues = {
  gasLimit: 300000,
  tokenApprovalGasLimit: 40205,
  maxGasPrice: 30000000000, // 30 Gwei
  gasPrice: 2000000000 // 2 Gwei
};

const providerName = 'kybernetwork';
const mainChainCurrency = 'ETH';

export {
  mainChainCurrency,
  providerName,
  defaultValues,
  kyberTokenList,
  kyberTokenInfoList,
  kyberValidNetworks,
  kyberNetworkENS,
  walletDepositeAddress
};